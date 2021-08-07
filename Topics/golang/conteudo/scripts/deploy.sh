docker container rm -f local-golang
docker image rm -f local-golang:latest
docker network rm golang_default
docker-compose up -d
