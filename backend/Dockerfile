FROM node:18-alpine

# Создаём директорию под логи и даём права (если нужен не-root пользователь, node)
RUN mkdir -p /var/log/backend && chown node:node /var/log/backend

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]