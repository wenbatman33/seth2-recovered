#!/usr/bin/env python3
"""Serial, read-only build inventory; media hashes include duplicate counts.

Use an explicit --project PROJECT=BUILD_DIR for archived builds. This does not
decode/recompress assets, copy builds, or touch Creator settings and source.
"""
import argparse
import datetime
import hashlib
import json
import os
from collections import Counter
from pathlib import Path

RASTER = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp', '.avif', '.ktx', '.ktx2', '.pvr', '.astc', '.pkm'}
AUDIO = {'.mp3', '.ogg', '.wav', '.m4a', '.aac', '.flac', '.opus'}


def inventory(project, build):
    build = build.resolve()
    if not (build / 'application.js').is_file():
        raise ValueError(f'{project}: missing official Web application.js in {build}')
    settings = json.loads((build / 'src/settings.json').read_text())
    stats = {'project': project, 'buildRoot': str(build), 'engineDebug': settings.get('engine', {}).get('debug'),
             'fileCount': 0, 'totalFileBytes': 0, 'jsFiles': 0, 'jsBytes': 0,
             'importJsonFiles': 0, 'importJsonBytes': 0, 'bundles': {}, 'media': {}}
    media = {kind: {'files': 0, 'bytes': 0, 'extensions': Counter(), 'sha256Multiset': {}}
             for kind in ('raster', 'audio')}
    for directory, subdirs, filenames in os.walk(build, followlinks=False):
        subdirs[:] = sorted(d for d in subdirs if not Path(directory, d).is_symlink())
        for name in sorted(filenames):
            file = Path(directory, name)
            if file.is_symlink() or not file.is_file():
                continue
            rel = file.relative_to(build)
            size = file.stat().st_size
            ext = file.suffix.lower()
            stats['fileCount'] += 1
            stats['totalFileBytes'] += size
            if ext == '.js':
                stats['jsFiles'] += 1
                stats['jsBytes'] += size
            if ext == '.json' and len(rel.parts) >= 4 and rel.parts[0] == 'assets' and rel.parts[2] == 'import':
                stats['importJsonFiles'] += 1
                stats['importJsonBytes'] += size
            if len(rel.parts) == 3 and rel.parts[0] == 'assets' and name == 'config.json':
                config = json.loads(file.read_text())
                packs = config.get('packs', {})
                stats['bundles'][rel.parts[1]] = {'packCount': len(packs),
                    'packMemberCount': sum(len(members) for members in packs.values()),
                    'configBytes': size, 'debug': config.get('debug'),
                    'uuidCount': len(config.get('uuids', []))}
            kind = 'raster' if ext in RASTER else 'audio' if ext in AUDIO else None
            if kind:
                # One native file at a time; bound memory and preserve bytes.
                digest = hashlib.sha256()
                with file.open('rb') as handle:
                    for chunk in iter(lambda: handle.read(1024 * 1024), b''):
                        digest.update(chunk)
                bucket = media[kind]
                bucket['files'] += 1
                bucket['bytes'] += size
                bucket['extensions'][ext] += 1
                entry = bucket['sha256Multiset'].setdefault(digest.hexdigest(), {'count': 0, 'bytesPerFile': size})
                if entry['bytesPerFile'] != size:
                    raise ValueError('Unexpected same SHA256 with different byte lengths')
                entry['count'] += 1
    for kind, bucket in media.items():
        bucket['extensions'] = dict(sorted(bucket['extensions'].items()))
        bucket['sha256Multiset'] = dict(sorted(bucket['sha256Multiset'].items()))
        bucket['uniqueHashes'] = len(bucket['sha256Multiset'])
        stats['media'][kind] = bucket
    return stats


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--project', action='append', required=True, metavar='PROJECT=BUILD_DIR')
    parser.add_argument('--output', required=True, type=Path)
    args = parser.parse_args()
    projects = []
    for entry in args.project:
        project, build = entry.split('=', 1)
        stats = inventory(project, Path(build))
        projects.append(stats)
        print(f"{project}: debug={stats['engineDebug']} JS={stats['jsBytes']} importJSON={stats['importJsonFiles']} total={stats['totalFileBytes']} media={stats['media']['raster']['files']} raster/{stats['media']['audio']['files']} audio", flush=True)
    report = {'schemaVersion': 1, 'observedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
              'scope': 'built file bytes, not browser transfer/decode/startup timing',
              'method': 'serial file reads; SHA256 of exact raster/audio file bytes; duplicate hashes retain count; no decoding or copying',
              'mediaExtensions': {'raster': sorted(RASTER), 'audio': sorted(AUDIO)},
              'projects': projects}
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, indent=2, ensure_ascii=False) + '\n')
    print(f'Saved {args.output}', flush=True)


if __name__ == '__main__':
    main()
