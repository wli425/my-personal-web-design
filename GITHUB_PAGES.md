# Deploy this website with GitHub Pages

No Lovable Publish step is needed once GitHub Pages is enabled. The workflow
`.github/workflows/deploy-pages.yml` builds the website and publishes successful
commits on `main`. You can also run it manually from the Actions tab.

## One-time owner setup

1. Open https://github.com/wli425/my-personal-web-design/settings/pages.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions > Deploy website to GitHub Pages > Run workflow**, choose
   `main`, and run it. Do not generate a second deployment workflow.
4. Wait for both **build** and **deploy** to succeed. Open the URL shown in the
   deployment result. Without a custom domain, the expected project URL is
   https://wli425.github.io/my-personal-web-design/.

This repository is private. GitHub Pages from a private personal repository
requires GitHub Pro (or another eligible plan). If the Pages settings page asks
for an upgrade, stop and decide whether to upgrade or make the source public.
The deployment workflow does not change repository visibility or billing.
A Pages site normally publishes the built website publicly even when its source
repository remains private; do not put secrets or confidential files in `public/`.

Before Pages is enabled, the workflow can still build and check the project.
Deployment intentionally stops if Pages metadata is unavailable. After enabling
Pages, run the full workflow again so the correct base path is rebuilt.

## Keep the existing custom domain

First verify the GitHub Pages project URL, including the photo, film posters,
email link, and navigation. Leave the existing hosting and DNS in place until
that check passes.

Then add the chosen canonical custom domain (for example `www.weiyuanli.net`)
in **Settings > Pages > Custom domain** and save. Update only the relevant web
DNS records at the domain provider using GitHub's current instructions; preserve
unrelated email and verification records. Configure the apex domain too if you
want both `weiyuanli.net` and `www.weiyuanli.net` to work.

Run this workflow again after changing the Pages custom domain. The workflow
reads Pages metadata and uses Vite's correct base path automatically: the
repository subdirectory for a project URL, or `/` for a custom domain. When
GitHub's certificate is ready, enable **Enforce HTTPS**. This source-code change
does not switch DNS or move the existing domain by itself.

## Local checks

Use Node.js 22 and the committed npm lockfile:

```sh
npm ci
npm run dev
```

To reproduce the project-URL build:

```sh
npm run build -- --base=/my-personal-web-design/
cp dist/index.html dist/404.html
node scripts/verify-pages-build.mjs /my-personal-web-design/
```

React Router, the profile photo, the film posters, and the return-home link use
Vite's `BASE_URL`; they also work at the root path when using a custom domain.
The 404 fallback preserves the app's own not-found page. It does not turn an
invalid URL into an HTTP 200 response.

## Official references

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://vite.dev/guide/static-deploy#github-pages
