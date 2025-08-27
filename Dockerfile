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


EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"] 