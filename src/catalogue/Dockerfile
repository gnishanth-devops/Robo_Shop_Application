# Dependencies Stage
FROM node:20-bookworm-slim AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# Runtime Stage
FROM node:20-bookworm-slim

LABEL maintainer="gnishanth0728@gmail.com"
LABEL service="catalogue"

ENV NODE_ENV=production

WORKDIR /app

# Create non-root user
RUN groupadd -r robogroup && \
    useradd -r -g robogroup robouser

# Copy dependencies
COPY --from=dependencies /app/node_modules ./node_modules

# Copy source
COPY . .

# Permissions
RUN chown -R robouser:robogroup /app

USER robouser

EXPOSE 8082

CMD ["node", "server.js"]
