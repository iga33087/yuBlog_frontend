FROM node:25

WORKDIR /usr/src/app

COPY . ./
RUN npm install

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "node", ".output/server/index.mjs" ]
