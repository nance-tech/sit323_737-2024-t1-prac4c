FROM node:lts-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY *.js ./

EXPOSE 4000

RUN apk --update --no-cache add curl

CMD [ "npm","start" ]


