/**
 * stream-v1 的加解密核心，伺服器與前端都用這支。前端會把整個檔案原封複製過去。
 *
 * 所以這支檔案不引用任何模組，只用 Uint8Array、位元運算與 globalThis.crypto.getRandomValues。
 * 引用別的模組前端就搬不走，Node 才有的那幾支 API 同理。
 *
 * keystream 是自製核心，設計與驗收條件寫在 trellis-project 根目錄的 docs/slot-encryption/Socket加密-自製核心規格.md。
 * 換 variant 是前後端要一起動的事：後端換、前端換、測試向量重產，三件事同一批上線。
 */

// 現在跑的是哪一支實作，前端拿到的測試向量要跟這個值對得上
export const CIPHER_VARIANT = 'custom'

const KID_MIN = 1
const KID_MAX = 255
const KEY_LENGTH = 32
const NONCE_LENGTH = 8
const HEADER_LENGTH = 1 + NONCE_LENGTH

const BLOCK_LENGTH = 64
const STATE_WORDS = 16
const WORD_BYTES = 4
const ROUNDS = 24

// state 是 16 個 word 排成 4×4，以下是各類輸入在 state 裡的索引。
// 每一欄剛好放一個常數、一個 nonce 或序號、兩個 K。
const CONSTANT_SLOTS = [1, 7, 8, 14]
const KEY_SLOTS = [0, 2, 4, 6, 9, 11, 13, 15]
const NONCE_SLOTS = [3, 10]
const COUNTER_SLOTS = [5, 12] // 依序是 block 序號的低位與高位

// 常數由 masterKey 衍生，再混入這組固定值。有了這組固定值，masterKey 就算全 0 或前後兩半相同，常數也不會是 0。
const CONSTANT_MIX = [0xe7188a4b, 0x96bac5cf, 0x0f2e489e, 0xcaca022a]
const MASTER_KEY_HALF_WORDS = 4

// 第 1、3、5… 輪按欄混合，第 2、4、6… 輪按反對角線混合，每一組是一次 quarterRound 的四個索引
const COLUMN_GROUPS = [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]]
const ANTI_DIAGONAL_GROUPS = [[0, 7, 10, 13], [1, 4, 11, 14], [2, 5, 8, 15], [3, 6, 9, 12]]

const BYTE_MASK = 0xff
const ROTATE_MASK = 0x07 // 位移層一次最多轉 7 個 bit

const isBytes = (value, length) => value instanceof Uint8Array && value.length === length

// 檢查 ctx 的三個欄位。錯誤訊息只講哪個欄位不合規，不帶任何金鑰內容。
const assertContext = ctx => {
  if (!ctx || typeof ctx !== 'object') {
    throw new Error('stream-cipher: ctx is missing')
  }
  const { kid, masterKey, key } = ctx
  if (!Number.isInteger(kid) || kid < KID_MIN || kid > KID_MAX) {
    throw new Error('stream-cipher: ctx.kid must be an integer between 1 and 255')
  }
  if (!isBytes(masterKey, KEY_LENGTH)) {
    throw new Error('stream-cipher: ctx.masterKey must be 32 bytes')
  }
  if (!isBytes(key, KEY_LENGTH)) {
    throw new Error('stream-cipher: ctx.key must be 32 bytes')
  }
  return { kid, masterKey, key }
}

// 32 位元左旋，結果用 >>> 0 轉回無號數，中間值才不會變成負數
const rotateLeft32 = (value, bits) => ((value << bits) | (value >>> (32 - bits))) >>> 0

const readUint32LE = (bytes, offset) => (
  (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24)) >>> 0
)

// 加法都是 mod 2^32，每一步用 >>> 0 轉回無號數
const quarterRound = (state, a, b, c, d) => {
  state[a] = (state[a] + state[b]) >>> 0
  state[d] = rotateLeft32(state[d] ^ state[a], 13)
  state[c] = (state[c] + state[d]) >>> 0
  state[b] = rotateLeft32(state[b] ^ state[c], 11)
  state[a] = (state[a] + state[b]) >>> 0
  state[d] = rotateLeft32(state[d] ^ state[a], 9)
  state[c] = (state[c] + state[d]) >>> 0
  state[b] = rotateLeft32(state[b] ^ state[c], 5)
}

const runGroups = (state, groups) => {
  for (const [a, b, c, d] of groups) {
    quarterRound(state, a, b, c, d)
  }
}

// 用 input 算出一個 64 bytes 的 block，寫進 out 的 offset 起點。working 是呼叫端備好的暫存區，內容會被蓋掉。
const computeBlock = (input, working, out, offset) => {
  working.set(input)
  for (let round = 0; round < ROUNDS; round += 2) {
    runGroups(working, COLUMN_GROUPS)
    runGroups(working, ANTI_DIAGONAL_GROUPS)
  }

  // 24 輪跑完，每個 word 加回 input 裡的原值，再依索引 0 到 15 以 little-endian 寫出
  for (let i = 0; i < STATE_WORDS; i += 1) {
    const word = (working[i] + input[i]) >>> 0
    const at = offset + i * WORD_BYTES
    out[at] = word & BYTE_MASK
    out[at + 1] = (word >>> 8) & BYTE_MASK
    out[at + 2] = (word >>> 16) & BYTE_MASK
    out[at + 3] = (word >>> 24) & BYTE_MASK
  }
}

/**
 * 產生 length bytes 的 keystream。
 * masterKey 前後兩半逐 word XOR，再混入 CONSTANT_MIX，得出 state 裡的四個常數。同一包的每個 block 共用這組常數。
 * block 序號從 0 起算，每個 block 加一，所以同一個 nonce 底下每個 block 的 keystream 都不同。
 */
const keystream = (masterKey, key, nonce, length) => {
  const blocks = Math.ceil(length / BLOCK_LENGTH)
  const out = new Uint8Array(blocks * BLOCK_LENGTH)
  const input = new Uint32Array(STATE_WORDS)
  const working = new Uint32Array(STATE_WORDS)

  for (let i = 0; i < CONSTANT_SLOTS.length; i += 1) {
    const firstHalf = readUint32LE(masterKey, i * WORD_BYTES)
    const secondHalf = readUint32LE(masterKey, (i + MASTER_KEY_HALF_WORDS) * WORD_BYTES)
    input[CONSTANT_SLOTS[i]] = (firstHalf ^ secondHalf ^ CONSTANT_MIX[i]) >>> 0
  }
  for (let i = 0; i < KEY_SLOTS.length; i += 1) {
    input[KEY_SLOTS[i]] = readUint32LE(key, i * WORD_BYTES)
  }
  for (let i = 0; i < NONCE_SLOTS.length; i += 1) {
    input[NONCE_SLOTS[i]] = readUint32LE(nonce, i * WORD_BYTES)
  }

  // 單包的 block 數到不了 2^32，序號的高位永遠是 0
  input[COUNTER_SLOTS[1]] = 0
  for (let block = 0; block < blocks; block += 1) {
    input[COUNTER_SLOTS[0]] = block >>> 0
    computeBlock(input, working, out, block * BLOCK_LENGTH)
  }
  return out.subarray(0, length)
}

// 位移層：加上 K 的一個 byte，再旋轉幾個 bit，旋轉量由 K 與 index 一起決定
const shellRotation = (key, index) => (key[(index + 7) % KEY_LENGTH] + index) & ROTATE_MASK

const shellEncode = (byte, key, index) => {
  const mixed = (byte + key[index % KEY_LENGTH]) & BYTE_MASK
  const rotation = shellRotation(key, index)
  return ((mixed << rotation) | (mixed >>> (8 - rotation))) & BYTE_MASK
}

const shellDecode = (byte, key, index) => {
  const rotation = shellRotation(key, index)
  const mixed = ((byte >>> rotation) | (byte << (8 - rotation))) & BYTE_MASK
  return (mixed - key[index % KEY_LENGTH]) & BYTE_MASK
}

const randomNonce = () => {
  const nonce = new Uint8Array(NONCE_LENGTH)
  globalThis.crypto.getRandomValues(nonce)
  return nonce
}

/**
 * 把壓縮後的 bytes 包成封包
 * @param {{ kid: number, masterKey: Uint8Array, key: Uint8Array }} ctx
 * @param {Uint8Array} plain 壓縮後的明文
 * @param {Uint8Array} [nonce] 只有測試會指定，正式流程讓它自己產生
 * @returns {Uint8Array} [1B kid][8B nonce][密文]
 */
export const encryptFrame = (ctx, plain, nonce) => {
  const { kid, masterKey, key } = assertContext(ctx)
  if (!(plain instanceof Uint8Array)) {
    throw new Error('stream-cipher: plain must be a Uint8Array')
  }
  if (nonce !== undefined && !isBytes(nonce, NONCE_LENGTH)) {
    throw new Error('stream-cipher: nonce must be 8 bytes')
  }

  const frameNonce = nonce === undefined ? randomNonce() : nonce
  const stream = keystream(masterKey, key, frameNonce, plain.length)
  const frame = new Uint8Array(HEADER_LENGTH + plain.length)
  frame[0] = kid
  frame.set(frameNonce, 1)
  for (let i = 0; i < plain.length; i += 1) {
    frame[HEADER_LENGTH + i] = shellEncode(plain[i] ^ stream[i], key, i)
  }
  return frame
}

/**
 * 把封包解回壓縮後的 bytes
 * @param {{ kid: number, masterKey: Uint8Array, key: Uint8Array }} ctx
 * @param {Uint8Array} frame
 * @returns {Uint8Array}
 * @throws 封包長度不足、kid 跟 ctx.kid 對不上
 */
export const decryptFrame = (ctx, frame) => {
  const { kid, masterKey, key } = assertContext(ctx)
  if (!(frame instanceof Uint8Array)) {
    throw new Error('stream-cipher: frame must be a Uint8Array')
  }
  if (frame.length < HEADER_LENGTH) {
    throw new Error('stream-cipher: frame is too short')
  }
  if (frame[0] !== kid) {
    throw new Error('stream-cipher: kid mismatch')
  }

  const frameNonce = frame.subarray(1, HEADER_LENGTH)
  const body = frame.subarray(HEADER_LENGTH)
  const stream = keystream(masterKey, key, frameNonce, body.length)
  const plain = new Uint8Array(body.length)
  for (let i = 0; i < body.length; i += 1) {
    plain[i] = shellDecode(body[i], key, i) ^ stream[i]
  }
  return plain
}

// api/infrastructure/index.js 由 npm run index 生成，它會用 default 匯入這個目錄的每一支檔案，所以這裡要留一個 default
export default { CIPHER_VARIANT, encryptFrame, decryptFrame }
