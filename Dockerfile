FROM node:18-alpine

WORKDIR /app

COPY . .

RUN sudo npm i -g yarn

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]