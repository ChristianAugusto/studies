from bd import nova_conexao
from mysql.connector import ProgrammingError



comando_1 = """
    INSERT INTO contatos
        (nome, tel)
    VALUES
        (%s, %s);
"""
args = ('Lucas', '(82) 2678-0780')


with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(comando_1, args) # Protege de ataques como SQL injection
        conexao.commit() # Salva as alterações

    except ProgrammingError as e:
        print(e)