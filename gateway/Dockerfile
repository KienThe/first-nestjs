FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "start:dev"]