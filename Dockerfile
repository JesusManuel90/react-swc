FROM node:22.12.0-alpine AS builder

WORKDIR /src

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22.12.0-alpine AS runtime

RUN apk add --no-cache curl

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /src

RUN npm install -g serve

COPY package*.json ./

RUN yarn install --production --frozen-lockfile

COPY --from=builder --chown=nextjs:nodejs /src/dist ./dist

USER nextjs

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:${PORT:-3000}/ || exit 1

CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"]