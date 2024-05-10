FROM node:20.12.0-buster-slim
RUN echo 'deb http://mirror.yandex.ru/debian/ bullseye main deb-src http://mirror.yandex.ru/debian/ bullseye main deb http://mirror.yandex.ru/debian-security bullseye-security main contrib deb-src http://mirror.yandex.ru/debian-security bullseye-security main contrib deb http://mirror.yandex.ru/debian/ bullseye-updates main contrib deb-src http://mirror.yandex.ru/debian/ bullseye-updates main contrib' > /etc/apt/sources.list
RUN apt-get update -y && apt-get install -y --no-install-recommends build-essential libvips-dev python3
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

