#!/bin/sh

# Replace environment variables in built files
# This is useful for runtime configuration
envsubst < /usr/share/nginx/html/index.html > /tmp/index.html && mv /tmp/index.html /usr/share/nginx/html/index.html

# Start nginx
exec "$@"
