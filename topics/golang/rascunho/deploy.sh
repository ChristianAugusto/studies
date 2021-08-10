docker container rm -f rascunho-golang
docker image rm -f rascunho-golang:latest
docker network rm rascunho_default
docker-compose up -d
