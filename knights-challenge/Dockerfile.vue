# Dockerfile.vue
FROM node:lts-alpine

# instalar dependências simples
RUN apk add --no-cache git

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]