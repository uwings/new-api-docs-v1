FROM node:22-bookworm-slim AS builder
WORKDIR /app

ARG DOCS_HOME_MODE=official
ARG DOCS_SITE_NAME="New API"
ARG DOCS_SITE_URL=http://localhost:3000
ARG DOCS_CONSOLE_URL=""

ENV NEXT_TELEMETRY_DISABLED=1
ENV DOCS_HOME_MODE=$DOCS_HOME_MODE
ENV DOCS_SITE_NAME=$DOCS_SITE_NAME
ENV DOCS_SITE_URL=$DOCS_SITE_URL
ENV DOCS_CONSOLE_URL=$DOCS_CONSOLE_URL

COPY package.json ./

# Remove fumadocs-openapi (we don't need OpenAPI spec rendering) and pin vite.
# This avoids the fumadocs-openapi / fumadocs-core 16.0.10 incompatibility.
RUN npm pkg delete dependencies.fumadocs-openapi \
    && npm pkg set devDependencies.vite="6.1.0" \
    && npm install --include=dev --ignore-scripts --legacy-peer-deps

COPY . .
RUN npx fumadocs-mdx
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
