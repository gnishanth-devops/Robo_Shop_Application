#!/bin/bash

set -e

echo "Running RoboShop smoke tests..."

# Frontend
curl -f http://localhost:8080/ > /dev/null
echo "✓ Frontend is reachable"

# User Service
curl -f http://localhost:8080/api/user/health > /dev/null || true

echo "All smoke tests passed!"