FROM circleci/node:10-browsers AS builder
RUN mkdir -p /app
COPY . /app/
WORKDIR /app
RUN if [ ! -d "node_modules" ] ; then npm ci ; else echo "Skipping 'npm ci'" ; fi
RUN npm run build

FROM nginx:1.15.12
RUN mkdir -p /opt
COPY --from=builder /app/dist /opt/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
