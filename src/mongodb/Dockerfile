# Pin exact MongoDB version
FROM mongo:7.0.21

# Metadata
LABEL maintainer="gnishanth0728@gmail.com"
LABEL description="RoboShop MongoDB Service"
LABEL version="1.0.0"

# Copy custom MongoDB config
COPY mongod.conf /etc/mongod.conf

# Expose MongoDB port
EXPOSE 27017

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD mongosh --eval "db.adminCommand('ping')" || exit 1

# Start MongoDB
CMD ["mongod", "--config", "/etc/mongod.conf"]