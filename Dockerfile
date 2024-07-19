### STAGE 1: Build ###
FROM node:14.21-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN apk add --no-cache git python3 make g++
RUN npm install
COPY . .
RUN npm run build-prod
#RUN npm install --package-lock

### STAGE 2: Run ###
FROM nginx:1.26.1-alpine
COPY nginx-conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
#COPY --from=build /usr/src/app/package-lock.json  /home/package-lock.json
