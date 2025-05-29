FROM node:18-alpine

WORKDIR /app
ENV NODE_ENV=development

# Копируем package.json + tsconfig и устанавливаем зависимости
COPY package.json tsconfig.json ./
RUN npm install

# Копируем всё остальное (index.ts и т.п.)
COPY . .

# Собираем TS → JS
RUN npm run build
ENV NODE_ENV=production
# На старте запускаем JS из dist
EXPOSE 3000
CMD ["npm", "start"]
