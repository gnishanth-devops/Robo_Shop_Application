# Build Stage
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package


# Runtime Stage
FROM eclipse-temurin:21-jre

WORKDIR /app

# Create non-root user
RUN groupadd -r robogroup && \
    useradd -r -g robogroup robouser

COPY --from=builder /app/target/shipping-1.0.jar shipping.jar

RUN chown -R robouser:robogroup /app

USER robouser

EXPOSE 8080

CMD ["java","-jar","shipping.jar"]
