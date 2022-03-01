FROM node:17.6
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
ENTRYPOINT ["node", "app/ServerApp.js"]
