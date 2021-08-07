from bd import nova_conexao
from mysql.connector import ProgrammingError



comando_1 = """
    DROP TABLE IF EXISTS emails;
"""

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()

        cursor.execute(comando_1)

    except ProgrammingError as e:
        print(e)