FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN useradd -r paymentuser

RUN chown -R paymentuser:paymentuser /app

USER paymentuser

EXPOSE 8080

CMD ["uwsgi", "--ini", "payment.ini"]
