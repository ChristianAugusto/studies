from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Routes(Resource):
    def get(self):
        return {'foo': 'foo'}

api.add_resource(Routes, '/')

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')