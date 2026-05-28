# Pin Image version
FROM nginx:1.31.1-alpine

LABEL maintainer="gnishanth0728@gmail.com"
LABEL version="1.0.0"
LABEL description="Frontend Application"

ENV APP_ENV=Development

# remove the default page
RUN rm -f /etc/nginx/conf.d/default.conf && \
    mkdir -p /tmp/nginx

# Creata a non root user
# Recommend to run the service with non root user
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    mkdir -p /tmp/nginx/client_temp && \
    mkdir -p /var/cache/nginx && \
    touch /tmp/nginx/nginx.pid

# Copy the nginx conf from local
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the source code
COPY ./html-files/ /usr/share/nginx/html

# Set permissions
RUN chown -R appuser:appgroup \
    /usr/share/nginx/html \
    /var/cache/nginx \
    /tmp/nginx \
    /etc/nginx

# Switch to non root user
USER appuser

# Application port
EXPOSE 8080

# health check
HEALTHCHECK --interval=30s --timeout=3s \
            CMD wget --quiet --tries=1 --spider http://localhost:8080 || exit 1

# Start nginx
CMD ["nginx","-g","daemon off;"]
