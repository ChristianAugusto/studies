FROM node:10.17.0

WORKDIR /store/server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]