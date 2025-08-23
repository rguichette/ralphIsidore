# deps
FROM node:22-alpine3.20 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# build
FROM node:22-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# run
FROM node:22-alpine3.20 AS runner
WORKDIR /app
ENV NODE_ENV=production
# (Optional) pull in patched OS libs if the scanner still flags something:
RUN apk update && apk upgrade --no-cache
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
USER node
CMD ["node", "server.js"]


