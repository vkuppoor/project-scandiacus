#!/bin/sh
docker build --platform linux/amd64 -t iad-api . # Ensures Apple Silicon computers build an amd64 image
docker run -d -p 8000:8000 iad-api
