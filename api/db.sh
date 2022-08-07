#!/bin/sh
docker build -t iad-api .
docker run -d -p 8000:8000 iad-api