# ===== Сборочный этап =====
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ===== Финальный образ =====
FROM node:20-alpine

WORKDIR /app

# Устанавливаем ТОЛЬКО production-зависимости
COPY package*.json ./
RUN npm ci --only=production

# Копируем готовый скомпилированный код из builder
COPY --from=builder /app/dist ./dist

# Если нужны другие файлы (например, .env — но лучше передавать через переменные!)
COPY --from=builder /app/.env ./.env

EXPOSE 3000

CMD ["node", "dist/index.js"]