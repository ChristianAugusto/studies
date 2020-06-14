from mysqlsrv.connection import connect as connectMysql
from flask import request
from flask_restful import Resource
from json import load as loadJson



products_config = loadJson(open('./filesConfig/products.json'))

def prods_category(reqArgs):
    if not reqArgs.get('categorySlug'):
        return {
            "data": None,
            "message": "No products to get"
        }


    startIndex = 0
    maxRange = products_config["maxRange"]

    if reqArgs.get('startIndex'):
        try:
            startIndex = int(reqArgs["startIndex"])
        except Exception as e:
            print(e)
            startIndex = 0

    lastIndex = startIndex + maxRange


    get_products_query = f"SELECT id,name,price,qtd_stock,image_path FROM products WHERE category_id = "
    get_category_id_query = f"SELECT id FROM categories WHERE slug = '{reqArgs['categorySlug']}'"
    limit = f'LIMIT {startIndex},{lastIndex}'
    query = f"{get_products_query}({get_category_id_query}){limit}"

    return {
        "data": connectMysql(query, dictionary=True),
        "maxRange": maxRange,
        "message": "Success"
    }


def prods_qtd_category(reqArgs):
    if not reqArgs.get('categorySlug'):
        return {
            "data": None,
            "message": "No products to get"
        }

    count_products_query = f"SELECT count(*) FROM products WHERE category_id = "
    get_category_id_query = f"SELECT id FROM categories WHERE slug = '{reqArgs['categorySlug']}'"
    query = f"{count_products_query}({get_category_id_query})"

    return {
        "data": connectMysql(query, dictionary=False)[0][0],
        "message": "Success"
    }


class Products(Resource):
    def get(self, subservice=None):
        try:
            subservices = {
                "category": prods_category,
                "qtdcategory": prods_qtd_category
            }

            return subservices[subservice](request.args)
        except Exception as e:
            print(request.args)
            print(e)
            return {
                "data": None,
                "message": "Error"
            }