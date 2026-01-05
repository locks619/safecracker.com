# Base44 Handoff — SafeCracker Inc Website

Repo: locks619/safecracker.com
Baseline tag: stable-20260104-1936

## Rules of engagement
- No direct pushes to master.
- All changes via PR.
- CI must be green (npm ci + npm run build).
- Build output must include docs/index.html (GitHub Pages).

## Known safe state
- master is clean and builds locally.
- Quarantine branches exist under quarantine/* (do not merge).
