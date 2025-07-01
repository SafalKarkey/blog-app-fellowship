# syntax=docker/dockerfile:1.4

FROM node:18-slim AS base

WORKDIR /backend2

COPY ./*.lock ./*.json ./

RUN yarn install --network-timeout 600000

FROM node:18-slim AS final

WORKDIR /backend2

COPY --from=base /backend2/ ./

COPY ./ ./

RUN --mount=type=secret,id=dotenv

CMD ["sh", "-c", "yarn migrate && yarn start"]


