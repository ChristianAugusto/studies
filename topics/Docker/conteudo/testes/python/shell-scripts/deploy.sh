sudo docker build -t teste-docker-python .
# sudo docker run --rm teste-docker-python
sudo docker run -d -p 80:5000 --rm teste-docker-python