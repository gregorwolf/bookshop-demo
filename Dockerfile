FROM node:20 AS build-env
WORKDIR /app
COPY gen/srv/package.json .
COPY package-lock.json .

RUN npm ci

COPY db/ ./db/
COPY srv/ ./srv/
COPY dynamic/ ./dynamic/

FROM gcr.io/distroless/nodejs20-debian12
COPY --from=build-env /app /app
WORKDIR /app
EXPOSE 4004
ENV NODE_ENV=development
CMD ["node_modules/.bin/cds", "run", "--with-mocks", "--in-memory"]
