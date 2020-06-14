import mysql.connector
from json import load as loadJson


connectionConfig = loadJson(open('./filesConfig/mysql-connection.json', 'r'))


def connect(query, dictionary=False):
    try:
        connection = mysql.connector.connect(**connectionConfig)

        cursor = connection.cursor(dictionary=dictionary)

        cursor.execute(query)

        connection.close()

        return cursor.fetchall()
    except Exception as e:
        print('Error in connection to database')
        print(e)
    else:
        connection.close()
