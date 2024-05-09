FROM node:20.12.0-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
RUN mkdir -p /usr/src/strapi
WORKDIR /usr/src/strapi
COPY package.json .
COPY . .
ENV NODE_ENV=production
ENV TZ Europe/Moscow

RUN yarn global add node-gyp
RUN yarn install --network-timeout 100000
RUN yarn build
EXPOSE 1337
CMD [ "yarn", "start" ]





