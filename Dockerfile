FROM node:22.12.0-alpine AS builder

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.12.0-alpine AS runtime

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /src

COPY package*.json ./

RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder --chown=nextjs:nodejs /src/dist ./dist

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000", "--allowedHosts", "react-swc.onrender.com,localhost,127.0.0.1"] 