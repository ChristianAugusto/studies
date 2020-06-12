from mysqlsrv.connection import connect as connectMysql
from flask import request
from flask_restful import Resource



class Categories(Resource):
    def get(self):
        try:
            fields = ''
            where = ''

            if request.args.get('where'):
                where = f'WHERE {request.args.get("where")}'

            if request.args.get('fields'):
                fields = request.args.get('fields')
            else:
                fields = 'name'


            data = connectMysql(f'SELECT {fields} FROM categories {where}')
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