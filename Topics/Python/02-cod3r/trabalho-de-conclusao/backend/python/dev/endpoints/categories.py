from mysqlsrv.connection import connect as connectMysql
from flask import request
from flask_restful import Resource



def categoryPage(reqArgs):
    if not reqArgs.get('categoryName'):
        return {
            "data": None,
            "message": "No category to search"
        }

    getProductsQuery = f"SELECT id,name,price,qtd_stock,image_path FROM products WHERE category_id = "
    getCategoryId = f"SELECT id FROM categories WHERE name = '{reqArgs.get('categoryName')}'"
    query = f"{getProductsQuery}({getCategoryId})"

    return connectMysql(query)


class Categories(Resource):
    def get(self, subservice=None):
        try:
            subservices = {
                "page": categoryPage
            }

            return subservices[subservice](request.args)
        except Exception as e:
            print(request.args)
            print(e)
            return {
                "data": None,
                "message": "Error"
            }