docker container rm -f conteudo-golang
docker image rm -f conteudo-golang:latest
docker network rm conteudo_default
docker-compose up -d
