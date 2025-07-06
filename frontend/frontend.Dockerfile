FROM node:18-slim AS base

WORKDIR /frontend

COPY ./*.lock ./*.json ./

RUN yarn --network-timeout 600000

FROM node:18-slim AS stage

WORKDIR /frontend

COPY --from=base /frontend ./

COPY ./ ./

# Accept build arguments for environment variables
ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_URL_ADDR

# Set environment variables from build args
ENV VITE_CLERK_PUBLISHABLE_KEY=${VITE_CLERK_PUBLISHABLE_KEY}
ENV VITE_URL_ADDR=${VITE_URL_ADDR}

RUN yarn build

FROM nginx:alpine AS prod

COPY --from=stage /frontend/dist/ /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
