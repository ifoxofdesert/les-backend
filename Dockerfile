FROM node:20.12.0-alpine3.18
RUN echo "https://mirror.yandex.ru/mirrors/alpine/v3.18/main" > /etc/apk/repositories;  echo "https://mirror.yandex.ru/mirrors/alpine/v3.18/community" >> /etc/apk/repositories ;
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev
RUN mkdir -p /usr/src/strapi
WORKDIR /usr/src/strapi
COPY package.json .
COPY . .

ENV NODE_ENV=production
ENV TZ Europe/Moscow
ENV npm_config_sharp_libvips_local_prebuilds=/usr/src/strapi/libvips/
ENV npm_package_config_libvips=8.14.5
RUN yarn global add node-gyp
RUN yarn config set nodedir /usr/src/strapi/node-v20.12.0-headers.tar.gz
RUN yarn install --network-timeout 100000
RUN yarn build
EXPOSE 1337
CMD [ "yarn", "start" ]





