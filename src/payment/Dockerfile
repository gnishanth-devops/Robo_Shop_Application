FROM python:3.11-slim

WORKDIR /app

# Required to compile uWSGI
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    gcc \
    build-essential \
    python3-dev && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN useradd -r paymentuser

RUN chown -R paymentuser:paymentuser /app

USER paymentuser

EXPOSE 8080

CMD ["uwsgi", "--ini", "payment.ini"]
