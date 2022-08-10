### STAGE 1: Build ###
FROM node:7.10.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN apk add --no-cache git python make g++
RUN npm install
COPY . .
RUN npm run build-prod

### STAGE 2: Run ###
FROM nginx:1.23.1-alpine
COPY nginx-conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
