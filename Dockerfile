FROM node:22.12.0-alpine AS builder

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.12.0-alpine AS runtime

WORKDIR /src

COPY package.json ./

RUN npm install

COPY --from=builder /src/dist ./dist

ENV VITE_PREVIEW_ALLOWED_HOSTS="react-swc.onrender.com,localhost,127.0.0.1"

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"] 