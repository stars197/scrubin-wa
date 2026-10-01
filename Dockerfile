FROM python:3.13-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY public/ ./public/
COPY server.py ./server.py

ENV PORT=8080
EXPOSE 8080

CMD ["python3", "server.py"]
