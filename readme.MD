# RoboShop Infrastructure Access & Deployment Guide

## Application URLs

| Service             | URL / Port            | Username | Password    |
| ------------------- | --------------------- | -------- | ----------- |
| RoboShop Frontend   | http://<EC2-IP>:8080  | N/A      | N/A         |
| RabbitMQ Management | http://<EC2-IP>:15672 | roboshop | roboshop123 |
| Adminer (MySQL UI)  | http://<EC2-IP>:8082  | root     | RoboShop@1  |
| Mongo Express       | http://<EC2-IP>:8083  | admin    | RoboShop@1  |
| RedisInsight        | http://<EC2-IP>:5540  | N/A      | N/A         |

---

# Backend Services

| Service  | Container | Port  | Username | Password    |
| -------- | --------- | ----- | -------- | ----------- |
| MySQL    | mysql     | 3306  | root     | RoboShop@1  |
| MongoDB  | mongodb   | 27017 | None     | None        |
| Redis    | redis     | 6379  | None     | None        |
| RabbitMQ | rabbitmq  | 5672  | roboshop | roboshop123 |

---

# Running RoboShop Locally

## Prerequisites

Install:

* Docker Engine
* Docker Compose Plugin
* Git

Verify:

```bash
docker --version
docker compose version
```

## Clone Repository

```bash
git clone https://github.com/<your-org>/Robo_Shop_Application.git
cd Robo_Shop_Application/compose
```

## Start Application

```bash
docker compose up -d --build
```

Verify:

```bash
docker ps
```

Check logs:

```bash
docker compose logs -f
```

## Access Application

| Service       | URL                    |
| ------------- | ---------------------- |
| Frontend      | http://localhost:8080  |
| RabbitMQ      | http://localhost:15672 |
| Adminer       | http://localhost:8082  |
| Mongo Express | http://localhost:8083  |
| RedisInsight  | http://localhost:5540  |

---

# Running RoboShop on AWS EC2

## EC2 Prerequisites

Recommended:

* Ubuntu 22.04
* t3.medium or larger
* Minimum 2 vCPU / 4 GB RAM

## Install Docker

```bash
sudo apt update
sudo apt install docker.io docker-compose-v2 -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker ubuntu
newgrp docker
```

Verify:

```bash
docker --version
docker compose version
```

## Clone Repository

```bash
git clone https://github.com/<your-org>/Robo_Shop_Application.git
cd Robo_Shop_Application/compose
```

## Start Application

```bash
docker compose up -d --build
```

Verify:

```bash
docker ps
```

---

# AWS Security Group Configuration

Allow the following inbound ports:

| Port  | Protocol | Purpose       |
| ----- | -------- | ------------- |
| 22    | TCP      | SSH           |
| 8080  | TCP      | RoboShop UI   |
| 8082  | TCP      | Adminer       |
| 8083  | TCP      | Mongo Express |
| 5540  | TCP      | RedisInsight  |
| 15672 | TCP      | RabbitMQ UI   |

---

# Access URLs (AWS)

Replace `<EC2-PUBLIC-IP>` with your server's public IP.

| Service       | URL                          |
| ------------- | ---------------------------- |
| RoboShop      | http://<EC2-PUBLIC-IP>:8080  |
| RabbitMQ      | http://<EC2-PUBLIC-IP>:15672 |
| Adminer       | http://<EC2-PUBLIC-IP>:8082  |
| Mongo Express | http://<EC2-PUBLIC-IP>:8083  |
| RedisInsight  | http://<EC2-PUBLIC-IP>:5540  |

---

# Common Commands

## View Containers

```bash
docker ps
```

## View Logs

```bash
docker compose logs -f
```

## Restart Application

```bash
docker compose restart
```

## Stop Application

```bash
docker compose down
```

## Rebuild Application

```bash
docker compose down
docker compose up -d --build
```

---

# Database Access

## MySQL

```bash
docker exec -it mysql mysql -uroot -pRoboShop@1
```

## MongoDB

```bash
docker exec -it mongodb mongosh
```

## Redis

```bash
docker exec -it redis redis-cli
```

## RabbitMQ

```bash
docker exec -it rabbitmq rabbitmqctl status
```

# RoboShop Infrastructure Access Details

## Application URLs

| Service             | URL / Port            | Username | Password    |
| ------------------- | --------------------- | -------- | ----------- |
| RoboShop Frontend   | http://<EC2-IP>:8080  | N/A      | N/A         |
| RabbitMQ Management | http://<EC2-IP>:15672 | roboshop | roboshop123 |
| Adminer (MySQL UI)  | http://<EC2-IP>:8082  | root     | RoboShop@1  |
| Mongo Express       | http://<EC2-IP>:8083  | admin    | RoboShop@1  |
| RedisInsight        | http://<EC2-IP>:5540  | N/A      | N/A         |

---

## Database Services

| Service   | Container Name | Internal Port | External Port | Username | Password    |
| --------- | -------------- | ------------- | ------------- | -------- | ----------- |
| MySQL 8.0 | mysql          | 3306          | 3306          | root     | RoboShop@1  |
| MongoDB 7 | mongodb        | 27017         | 27017         | None     | None        |
| Redis     | redis          | 6379          | 6379          | None     | None        |
| RabbitMQ  | rabbitmq       | 5672          | 5672          | roboshop | roboshop123 |

---

## RabbitMQ Details

| Property           | Value       |
| ------------------ | ----------- |
| Exchange           | robot-shop  |
| Exchange Type      | direct      |
| AMQP Port          | 5672        |
| Management UI Port | 15672       |
| Username           | roboshop    |
| Password           | roboshop123 |

---

## RedisInsight Connection

| Field            | Value          |
| ---------------- | -------------- |
| Database Alias   | RoboShop Redis |
| Host             | redis          |
| Port             | 6379           |
| Username         | Leave Empty    |
| Password         | Leave Empty    |
| Logical Database | 0              |

---

## Mongo Express Connection

| Field                  | Value      |
| ---------------------- | ---------- |
| MongoDB Host           | mongodb    |
| MongoDB Port           | 27017      |
| MongoDB Authentication | Disabled   |
| UI Username            | admin      |
| UI Password            | RoboShop@1 |

---

## Adminer Connection

| Field    | Value      |
| -------- | ---------- |
| System   | MySQL      |
| Server   | mysql      |
| Username | root       |
| Password | RoboShop@1 |
| Database | cities     |

---

## Useful Commands

### RabbitMQ

```bash
docker exec -it rabbitmq rabbitmqctl status
docker exec -it rabbitmq rabbitmqctl list_exchanges
docker exec -it rabbitmq rabbitmqctl list_queues
```

### Redis

```bash
docker exec -it redis redis-cli
KEYS *
DBSIZE
```

### MongoDB

```bash
docker exec -it mongodb mongosh
show dbs
use catalogue
show collections
```

### MySQL

```bash
docker exec -it mysql mysql -uroot -pRoboShop@1
SHOW DATABASES;
USE cities;
SHOW TABLES;
```

# GitHub Actions Setup for RoboShop Docker Builds

## Prerequisites

* GitHub Repository
* Docker Hub Account
* Docker Hub Access Token
* GitHub Actions enabled

---

## Step 1: Generate Docker Hub Access Token

1. Login to Docker Hub.

2. Navigate to:

   Account Settings → Personal Access Tokens

3. Click **Generate New Token**.

4. Provide:

   * Token Description: `github-actions`
   * Access Permissions: `Read, Write, Delete`

5. Copy and save the token securely.

---

## Step 2: Configure GitHub Secrets

Navigate to:

Settings → Secrets and variables → Actions → Secrets

Create the following secrets:

| Secret Name        | Value                    |
| ------------------ | ------------------------ |
| DOCKER_USERNAME | Your Docker Hub username |
| DOCKER_PASSWORD    | Docker Hub access token  |


## Step 3: Configure GitHub Variables

Navigate to:

Settings → Secrets and variables → Actions → Variables

Create:

| Variable Name | Value                  |
| ------------- | ---------------------- |
| REPO_NAME     | <replace with your repo (org/repo)> |

---

## Step 4: Docker Login in GitHub Actions

```yaml
- name: Login to Docker Hub
  uses: docker/login-action@v3
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}
```

---



## GitHub Configuration Summary

### Secrets

| Name               |
| ------------------ |
| DOCKER_USERNAME |
| DOCKER_PASSWORD  |

### Variables

| Name      | Value                  |
| --------- | ---------------------- |
| REPO_NAME | <replace with your repo (org/repo) |

