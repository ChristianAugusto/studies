from mysqlsrv.connection import connect as connectMysql
from flask import request
from flask_restful import Resource



def categ_info(reqArgs):
    if not reqArgs.get('categorySlug'):
        return {
            "data": None,
            "message": "No category to get"
        }

    query = f"SELECT id,name,image_path FROM categories WHERE slug = '{reqArgs['categorySlug']}'"

    return {
        "data": connectMysql(query, dictionary=True)[0],
        "message": "Success"
    }


class Categories(Resource):
    def get(self, subservice=None):
        try:
            subservices = {
                "info": categ_info
            }

            return subservices[subservice](request.args)
        except Exception as e:
            print(request.args)
            print(e)
            return {
                "data": None,
                "message": "Error"
            }