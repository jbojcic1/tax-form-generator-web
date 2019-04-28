FROM cypress/base

RUN mkdir -p /app

WORKDIR /app

COPY . /app/

RUN npm install

CMD ["npm", "run", "e2e"]
