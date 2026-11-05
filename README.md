# jonasbpa.dev

Personal site of Jonas Berchol. Static Astro site, deployed to Cloudflare Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Content lives in `src/data/site.ts`.

## Deploy (Cloudflare Pages)

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=24`
