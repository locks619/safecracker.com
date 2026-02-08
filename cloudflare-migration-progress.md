# Cloudflare Migration — Progress & Next Steps
## LAST UPDATED: Feb 7, 2026 — Dinner Break

## COMPLETED
- Safe image (safe-amsec.png) added to safes-vaults.html — LIVE
- Cloudflare account: Locks619@gmail.com
- Cloudflare Pages project created: safecracker-com
- Preview working at: safecracker-com.pages.dev
- Build settings: Framework=None, Build command=BLANK, Output dir=docs
- Domain safecrackerinc.com added to Cloudflare (Free plan)
- DNS records imported
- GoDaddy nameservers CHANGED to rafe.ns.cloudflare.com and razvan.ns.cloudflare.com

## STOPPED AT
- Waiting for DNS propagation
- Need to click Done check nameservers in Cloudflare
- Then verify domain shows ACTIVE

## NEXT STEPS
1. Verify Cloudflare shows safecrackerinc.com as Active
2. Go to Workers and Pages then safecracker-com then Custom domains
3. Add safecrackerinc.com as custom domain
4. Delete old GitHub Pages A records (185.199.108/109/110/111.153)
5. Delete old CNAME www to locks619.github.io
6. Verify site loads from Cloudflare Pages
7. Disable GitHub Pages in repo settings
8. Add Decap CMS for phone admin panel
9. Set up Cloudflare R2 for media storage
