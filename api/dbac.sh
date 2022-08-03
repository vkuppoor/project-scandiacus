#!/bin/sh

docker build --platform linux/amd64 -t iad-api . # Ensures Apple Silicon computers build an amd64 image