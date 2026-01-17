#!/bin/bash
set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo "[$(date)] Running certbot renew..."

# Обновляем сертификаты
docker run --rm \
  -v ./nginx/certs:/etc/letsencrypt \
  -v ./acme-challenge:/var/www/challenge \
  certbot/certbot \
  renew --quiet

# Перезагружаем nginx, чтобы подхватил новые сертификаты
docker-compose exec -T nginx nginx -s reload

echo "[$(date)] Renewal completed."