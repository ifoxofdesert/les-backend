FROM node:20.12.0-alpine
RUN mkdir -p /usr/src/strapi
WORKDIR /usr/src/strapi
RUN apt-get install -y --no-install-recommends libvips
COPY package.json .
COPY . .
ENV NODE_ENV=production
ENV TZ Europe/Moscow
RUN yarn install --network-timeout 100000
RUN yarn build
EXPOSE 1337
CMD [ "yarn", "start" ]





