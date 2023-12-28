FROM node:alpine

WORKDIR /usr/app

RUN mkdir -p /usr/app/data \
    && chmod -R 777 /usr/app/data

COPY ./package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3100

CMD ["pnpm", "start:dev"]