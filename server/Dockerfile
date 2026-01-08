FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

RUN npm prune --production

EXPOSE 3000

# dotenv подключается в коде (require('dotenv').config())
CMD ["node", "dist/index.js"]