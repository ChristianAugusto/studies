docker-compose up -d

docker container exec -it localstacktest bash -c /app/scripts/config.sh
docker container exec -it localstacktest bash -c /app/scripts/create-queue.sh
