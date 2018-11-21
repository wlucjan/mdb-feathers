FROM node:10.13-alpine

ARG DEV=0
ENV NODE_PORT 80

WORKDIR /usr/src/app

RUN yarn global add pm2@^3.2.2 \
      && yarn cache clean

RUN test "$DEV" -eq "1" \
      && yarn global add @feathersjs/cli \
      && yarn cache clean \
      || echo "Skipping installation dev tools"

COPY ["package.json", "yarn.lock", "./"]

RUN yarn --production \
      && yarn cache clean

COPY . /usr/src/app

EXPOSE 80

CMD ["pm2-docker", "./src/index.js"]
