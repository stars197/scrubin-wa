FROM python:3.13-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app/
RUN mkdir -p /app/public/assets && \
    for f in index.html index.css app.js; do [ -f "/app/$f" ] && cp "/app/$f" "/app/public/$f" || true; done && \
    [ -f "/app/hero-illustration.jpg" ] && cp "/app/hero-illustration.jpg" "/app/public/assets/hero-illustration.jpg" || true

ENV PORT=8080
EXPOSE 8080

CMD ["python3", "server.py"]
