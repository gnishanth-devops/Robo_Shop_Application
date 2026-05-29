# Dependencies stage
FROM node:20-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# Runtime stage
FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

# Create non-root user
RUN addgroup -S robogroup && \
    adduser -S robouser -G robogroup

# Copy dependencies
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application code
COPY . .

# Set ownership
RUN chown -R robouser:robogroup /app

USER robouser

EXPOSE 8080

CMD ["node", "server.js"]
