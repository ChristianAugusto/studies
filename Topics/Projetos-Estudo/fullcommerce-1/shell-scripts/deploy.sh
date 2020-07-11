cd website
./deploy-website.sh
cd ..
sudo docker container rm -f fullcomerce-1
sudo docker image rm -f fullcomerce-1:latest
sudo docker-compose up -d
# sudo docker exec -it fullcomerce-1 bash