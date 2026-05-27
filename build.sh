#!/usr/bin/env bash
set -euo pipefail

echo "Building..."
npm run build

PORT=4173
while :; do
  if lsof -i ":$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "Port $PORT is in use, trying $((PORT + 1))..."
    PORT=$((PORT + 1))
  else
    break
  fi
done

echo "Serving dist/ at http://127.0.0.1:$PORT/"
node scripts/dev-server.mjs dist "$PORT"
