#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Build Docker image with build args
docker build \
  --build-arg VITE_CLERK_PUBLISHABLE_KEY="$VITE_CLERK_PUBLISHABLE_KEY" \
  --build-arg VITE_URL_ADDR="$VITE_URL_ADDR" \
  -t frontend-image \
  -f frontend.Dockerfile .
