# --- deps ---
FROM node:22-alpine3.20 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- build ---
FROM node:22-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ensure public/ exists even if your repo doesn't have it
RUN mkdir -p public
RUN npm run build

# --- run ---
FROM node:22-alpine3.20 AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5080
# (optional) keep base libs patched
# RUN apk update && apk upgrade --no-cache

# copy Next.js standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 5080
USER node
CMD ["node", "server.js"]
