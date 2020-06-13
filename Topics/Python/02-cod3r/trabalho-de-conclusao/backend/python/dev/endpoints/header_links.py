from mysqlsrv.connection import connect as connectMysql
from flask import request
from flask_restful import Resource



class HeaderLinks(Resource):
    def get(self):
        try:
            data = connectMysql(f'SELECT * FROM header_links')
            return {
                "data": data,
                "message": "Success"
            }
        except Exception as e:
            print(request.args)
            print(e)
            return {
                "data": None,
                "message": "Error"
            }