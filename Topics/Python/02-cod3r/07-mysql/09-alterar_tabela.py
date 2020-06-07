from bd import nova_conexao
from mysql.connector import ProgrammingError



comando_1 = """
    ALTER TABLE contatos ADD COLUMN id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY;
"""

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()

        cursor.execute(comando_1)

    except ProgrammingError as e:
        print(e)