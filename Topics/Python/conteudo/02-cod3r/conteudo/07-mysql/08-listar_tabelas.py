from bd import nova_conexao
from mysql.connector import ProgrammingError



comando_1 = """
    SHOW TABLES;
"""

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()

        cursor.execute(comando_1)

        for i, table in enumerate(cursor, start=1):
            print(f'Banco de dados {i}', table)

    except ProgrammingError as e:
        print(e)