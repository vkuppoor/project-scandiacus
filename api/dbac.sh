#!/bin/sh
docker build --platform linux/amd64 -t iad-api . # Ensures Apple Silicon computers build an amd64 image
<<<<<<< HEAD
docker run -d -p 8000:8000 iad-api
=======
docker run -d -p 8000:8000 iad-api
>>>>>>> 50fb664211902a85641a0665a795958185b7c35c
