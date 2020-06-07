from bd import nova_conexao
from mysql.connector import ProgrammingError



comando_1 = """
    SELECT id, nome, tel FROM contatos;
"""


with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(comando_1)

        contatos = cursor.fetchall()

        print(contatos)

    except ProgrammingError as e:
        print(e)