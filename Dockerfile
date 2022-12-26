FROM node:alpine

RUN npm i -g pnpm
RUN npm i -g http-server

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm build

CMD ["http-server", "."]