#!/bin/zsh
cd -- "${0:A:h}" || exit 1
exec node tools/start-preview.cjs --open
