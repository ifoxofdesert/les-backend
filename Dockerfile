FROM node:20.12.0-alpine3.18
RUN echo "https://mirror.yandex.ru/mirrors/alpine/v3.18/main" > /etc/apk/repositories;  echo "https://mirror.yandex.ru/mirrors/alpine/v3.18/community" >> /etc/apk/repositories ;
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev
RUN yarn install --network-timeout 100000
RUN mkdir -p /usr/src/strapi
WORKDIR /usr/src/strapi
COPY package.json .
COPY . .

ENV NODE_ENV=production
ENV TZ Europe/Moscow
RUN yarn build
EXPOSE 1337
CMD [ "yarn", "start" ]





