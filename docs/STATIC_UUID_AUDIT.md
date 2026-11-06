# Static Cocos UUID reference audit

Run the read-only helper from this collection root:

```sh
python3 tools/recovery/audit-static-uuid-references.py Project-E Project-F --inspect-build --out /tmp/creator-uuid-audit.json
python3 tests/test-static-uuid-references.py
```

The output file must be new. Use `--engine-assets` for another installed Creator assets directory. The helper recursively inventories actual `.meta` UUIDs, including every nested `subMetas`, and scans `__uuid__` references in `.scene`, `.prefab` and `.mtl` files. Engine builtins are classified separately. An orphan meta does not resolve an asset; duplicate owner metas and parse failures remain visible.

Optional source-frame alias evidence comes from each project's `docs/static-uuid-source-aliases.json`, or `--alias-dir` for a full source inventory. A source config knowing a UUID does not prove that a corresponding asset/meta was produced. The report keeps mapped missing references explicitly missing.

`--inspect-build` only reads official `build/web` config/import/pack files required for those missing references. It decodes the installed build's serialized properties using the existing Cocos compiled-data decoder. Restore identities use asset UUID plus `CompPrefabInfo.fileId` and property path, or a prefab-instance fileId plus target localID and override path. It never guesses a component from an array index. No Creator process, network, renderer or GPU allocation is involved.

The six fixtures cover nested builtin faces, actual local metas versus source-only aliases, reordered/inlined components with omitted properties, null prefab-instance overrides, orphan/duplicate/unknown assets, ambiguous fileIds and refusal to overwrite reports. They validate serialization contracts rather than rendering or fabricated images.

The current seven-project scan found no missing serialized UUID references in Project-C/D/G/H/I. Project-E had one mapped missing frame. Project-F had51 mapped missing frames across113 references: its official Builder omitted112 component properties and nullified one prefab-instance override. Those cases need exact pre-instantiation property restoration or proper pre-build source frames; a loadDir/loadAny cache by itself cannot recover deleted properties. Project-E/F retain detailed public-source reports and the minimal alias evidence in their own docs folders.
