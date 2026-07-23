# Self-hosting this fork

This fork keeps the upstream documentation content while adding a small,
reviewable self-hosting layer.

## Configuration

Copy `.env.example` to `.env` and set:

```dotenv
DOCS_HOME_MODE=docs
DOCS_SITE_NAME=New API
DOCS_SITE_URL=https://docs.example.com
DOCS_CONSOLE_URL=https://api.example.com
```

- `DOCS_HOME_MODE=docs` redirects `/<lang>` to `/<lang>/docs`.
- `DOCS_HOME_MODE=official` keeps the upstream promotional landing page.
- `DOCS_SITE_NAME` changes the documentation navigation brand text.
- `DOCS_SITE_URL` is used for metadata, sitemap, and robots.txt.
- `DOCS_CONSOLE_URL` adds an external console link to the docs navigation.

These values are build arguments because Next.js statically generates much of
the site. Rebuild the image after changing them.

## Deploy

```bash
docker compose --progress plain build
docker compose up -d
docker compose ps
```

## Why the Dockerfile differs from upstream

The upstream repository does not currently include a production Dockerfile.
The build fixes several dependency issues found during deployment:

1. Node 22 on Debian is used instead of Bun on Alpine to avoid `tsx`/native
   module compatibility failures during `prebuild`.
2. `vite` is installed explicitly because `fumadocs-mdx` imports it during
   generation but the upstream package manifest does not declare it.
3. `fumadocs-openapi` is pinned to `10.1.0`, matching `bun.lock`. Allowing npm
   to resolve `^10.1.0` currently installs a newer release that is incompatible
   with the repository's pinned `fumadocs-core` and `fumadocs-ui` versions.
4. Install scripts are skipped until the full source tree exists, then
   `fumadocs-mdx` is run explicitly before `next build`.

## Upstream updates

`.github/workflows/sync-upstream.yml` runs weekly and can also be triggered
manually. It opens or updates a pull request instead of writing directly to
`main`, so upstream changes can be reviewed and built before merging.