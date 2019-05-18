FROM circleci/node:10-browsers AS builder
USER root
RUN mkdir -p /app
COPY . /app/
WORKDIR /app
RUN npm ci
RUN npm run build -- --prod

FROM nginx:1.15.12
RUN mkdir -p /opt
COPY --from=builder /app/dist /opt/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
