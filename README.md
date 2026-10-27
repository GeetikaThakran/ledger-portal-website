# Ledger Portal website

Public site for [Ledger Portal](https://github.com) desktop accounting software. Visitors can read the product story and download the Mac or Windows build for the computer they are on.

## Run it

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173).

## Put the installers on the site

Copy the packed files into `public/downloads/`:

- `LedgerPortal-mac.dmg`
- `LedgerPortal-x64.zip`

Then `npm run build`. The Download page detects macOS vs Windows and serves the matching file.

## Dummy contact

The office address, phones and emails on the site are placeholders (`hello@ledgerportal.in`, Connaught Place). Swap them in `src/lib/site.ts`.
