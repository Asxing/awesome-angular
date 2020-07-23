FROM node:10-alpine AS builder
RUN rm /etc/apk/repositories \
    && echo "http://mirrors.ustc.edu.cn/alpine/v3.5/main" > /etc/apk/repositories  \
    && echo "http://mirrors.ustc.edu.cn/alpine/v3.5/community" >> /etc/apk/repositories
RUN apk --update add python g++ make && rm -rf /var/cache/apk/*
WORKDIR /app/
COPY . /app/
WORKDIR /app/ramui/
RUN rm -rf dist/ && rm -rf node_modules
RUN  npm cache clean --force && rm -rf package-lock.json && npm install --registry https://registry.npm.taobao.org && npm run buildTest
FROM nginx:1.13.7-alpine
COPY --from=builder /app/ramui/dist/ramui/ /usr/share/nginx/html/
COPY  ./nginx/config/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY  ./nginx/ssl/ /ssl/
