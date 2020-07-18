cd website
source deploy-website.sh
cd ..
sudo docker container rm -f fullcommerce-1
# sudo docker image rm -f fullcommerce-1:latest
sudo docker-compose up -d
# sudo docker exec -it fullcommerce-1 bash