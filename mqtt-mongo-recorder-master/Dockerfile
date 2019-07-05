FROM node:12
MAINTAINER frederic <frederic.jenn.alet@gmail.com>

COPY . /app
WORKDIR /app

RUN npm install 

RUN echo "-------------- DONE ----------------"

RUN node server.js
