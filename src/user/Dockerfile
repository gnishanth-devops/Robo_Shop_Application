# Multi stage build
FROM node:20-alpine AS dependencies

ENV REDIS_URL=redis://redis:6379
ENV MONGO_URL=mongodb://mongodb:27017/users

# Set working dir
WORKDIR /app

# Copy dependecies files first for caching
COPY package*.json .

# Install only prod dependencies
RUN npm ci --omit=dev

# Stage 2 Runtime
FROM node:20-alpine

ENV NODE_ENV=dev

# create app directory
WORKDIR /app

# Create a non root user
RUN addgroup -S robogroup && \
    adduser -S robouser -G robogroup

# Copy dependencies
COPY --from=dependencies /app/node_modules ./node_modules

# copy the source file
COPY . .

# Set ownership
RUN chown -R robouser:robogroup /app

#switch to non root user
USER robouser

#EXPOSE the app port
EXPOSE 8080

# Start the app
CMD ["node","server.js"]
