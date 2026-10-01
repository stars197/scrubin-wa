#!/usr/bin/env bash
# ScrubIn WA — Public & Local Deployment Helper Script
# Supports:
#   1. Local / Cloudtop Server (default: port 8080)
#   2. Google Cloud Run (./deploy.sh cloudrun <GCP_PROJECT_ID>)

set -euo pipefail

MODE="${1:-local}"
PROJECT_ID="${2:-}"
PORT="${PORT:-8080}"

if [[ "$MODE" == "cloudrun" ]]; then
  if [[ -z "$PROJECT_ID" ]]; then
    echo "Usage: ./deploy.sh cloudrun <GCP_PROJECT_ID>"
    exit 1
  fi
  echo "Deploying ScrubIn WA to Google Cloud Run (us-west1) in project: $PROJECT_ID ..."
  gcloud run deploy scrubin-wa \
    --source . \
    --project "$PROJECT_ID" \
    --region us-west1 \
    --allow-unauthenticated \
    --min-instances 1 \
    --port 8080
  exit 0
fi

echo "Starting ScrubIn WA server (with 24h NIH & Link Sync Daemon) on port ${PORT}..."
echo "Local URL:    http://localhost:${PORT}"
echo "Cloudtop URL: http://$(hostname -f):${PORT}"
exec python3 "$(dirname "$0")/server.py"
