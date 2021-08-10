docker container rm -f local-python
docker image rm -f local-python:latest
docker network rm rascunho_default
docker-compose up -d
