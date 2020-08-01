sudo docker container rm -f fullcommerce_1-store_api fullcommerce_1-store_website fullcommerce_1-mysql
sudo docker image rm fullcommerce_1-store_api:latest
sudo docker-compose up -d