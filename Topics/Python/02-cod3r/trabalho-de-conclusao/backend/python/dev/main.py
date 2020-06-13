import endpoints.products
from mysql.connector import connect
from flask import Flask
from flask_restful import Resource, Api
from endpoints.products import Products
from endpoints.categories import Categories
from endpoints.header_links import HeaderLinks



app = Flask(__name__)
api = Api(app)


api.add_resource(Products, '/api/products', methods=['GET'])
api.add_resource(Categories, '/api/categories/<subservice>', methods=['GET'])
api.add_resource(HeaderLinks, '/api/header_links', methods=['GET'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)