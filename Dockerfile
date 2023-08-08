FROM node:16.19.0-buster as builder

WORKDIR /app

COPY . .

RUN yarn install

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]