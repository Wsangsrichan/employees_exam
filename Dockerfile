FROM node:8.4.0-alpine

WORK /app
COPY . /app
RUN npm install

CMD ["npm","start"]

EXPOSE 9000