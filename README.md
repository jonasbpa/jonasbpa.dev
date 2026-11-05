# jonasbpa.dev

Personal site of Jonas Berchol. Static Astro site, deployed to Cloudflare Workers (static assets).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Content lives in `src/data/site.ts`.

## Deploy (Cloudflare Workers, static assets)

Connected to GitHub in the Cloudflare dashboard; every push to `main` deploys.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (serves `dist/`, see `wrangler.jsonc`)
- Environment variable: `NODE_VERSION=24`
