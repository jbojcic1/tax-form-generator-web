FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]
