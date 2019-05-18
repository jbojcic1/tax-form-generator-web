FROM node:10 AS builder
RUN mkdir -p /app
COPY . /app/
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx:1.15.12
RUN mkdir -p /opt
COPY --from=builder /app/dist /opt/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
