#!/usr/bin/env bash
# ScrubIn Health — Automated GitHub + Render Deployment Script
set -euo pipefail

cd "$(dirname "$0")"

cp public/index.html ./index.html
cp public/index.css ./index.css
cp public/app.js ./app.js
cp public/assets/hero-illustration.jpg ./hero-illustration.jpg

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "Deploy ScrubIn Health updates ($(date -u +'%Y-%m-%d %H:%M UTC'))"
fi

echo "Pushing latest ScrubIn Health build to GitHub (stars197/scrubin-wa)..."
git push origin main
echo "Done! Render is now building and deploying to https://scrubinhealth.com (~60-90 seconds)."
