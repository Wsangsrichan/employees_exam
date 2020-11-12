FROM node:8.4.0-alpine

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 9000                                                            