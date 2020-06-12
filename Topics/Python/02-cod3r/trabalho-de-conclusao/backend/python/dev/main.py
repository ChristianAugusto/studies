import endpoints.products
from mysql.connector import connect
from flask import Flask
from flask_restful import Resource, Api
from endpoints.products import Products
from endpoints.categories import Categories



app = Flask(__name__)
api = Api(app)


api.add_resource(Products, '/api/products')
api.add_resource(Categories, '/api/categories')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)