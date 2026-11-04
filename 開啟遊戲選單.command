#!/bin/zsh
cd -- "${0:A:h}" || exit 1
exec node tools/start-frontend-preview.mjs --open
