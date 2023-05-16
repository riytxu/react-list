FROM node:16-alpine
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm i
RUN npm i -g serve
COPY . ./
RUN npm run build