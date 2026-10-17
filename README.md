# gipsoong.com

Personal portfolio: a left brain / right brain homepage that splits into **/work** (CV first, case studies after) and **/play** (photography and side projects).

- **Site:** [Astro](https://astro.build), built to plain static files. No server code runs in production.
- **Content:** case studies and photo sets come from [Sanity](https://www.sanity.io). The CV lives in `src/data/cv.ts`.
- **Hosting:** Cloudflare Workers static assets, serving `dist/`. Security headers are in `public/_headers`.

## Local development

```sh
npm install
npm run dev          # http://localhost:4321
```

If `SANITY_PROJECT_ID` is not set, the site builds with the placeholder content in `src/data/placeholders.ts`.

## One-time setup

### 1. Sanity (content editor)

**All in the browser (no local machine):** create the project at sanity.io/manage, then in Cloudflare import this repo a second time with root directory `studio`, build command `npm run build`, deploy command `npx wrangler deploy`, and build variable `SANITY_STUDIO_PROJECT_ID`. Give it a custom domain such as `studio.gipsoong.com`, and add that URL under **API → CORS origins** in sanity.io/manage with "Allow credentials" ticked.

**Or from a terminal:**

```sh
cd studio
npm install
npx sanity login
npx sanity init --env    # creates a project and writes SANITY_STUDIO_PROJECT_ID to .env
npm run deploy           # hosts the editor at https://gipsoong.sanity.studio
```

Then, in the root of this repo, copy `.env.example` to `.env` and set `SANITY_PROJECT_ID` to the same ID. The dataset is public-read by default, which is fine for portfolio content.

### 2. Cloudflare (hosting)

1. In the Cloudflare dashboard, open **Workers & Pages → Create → Import a repository** and pick this repo.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Under **Settings → Variables**, add `SANITY_PROJECT_ID` (and `SANITY_DATASET` if it isn't `production`) as build variables.
4. Under **Settings → Domains & Routes**, add `gipsoong.com` as a custom domain.

### 3. Rebuild when you publish

1. In Cloudflare: **Settings → Builds → Deploy Hooks**, create a hook for `main` and copy its URL. Treat it as a secret.
2. In Sanity: **manage.sanity.io → API → Webhooks**, add a webhook with that URL, method `POST`, filter `_type in ["project", "photoSet"]`, triggered on create, update and delete.

Publishing in the studio now redeploys the site.

## Editing

- **Case studies and photo sets:** in the studio. `order` controls position; the first three case studies show on /work.
- **CV text, email, LinkedIn:** `src/data/cv.ts`. To offer a PDF CV, put the file in `public/` and set `cvPdf`.
- **Colours and type:** tokens at the top of `src/styles/global.css`.
- **Hand-drawn wobble:** any SVG or element with the `rough` class gets it (`src/components/Rough.astro`). Hand-drawn illustrations exported as SVG strokes can use it too.
