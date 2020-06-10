# Essa versão pega todo o conteúdo do arquivo e coloca na memória

arquivo = open('./pessoas.csv')

dados = arquivo.read()

for registro in dados.splitlines():
    print('Nome: {}, Idade: {}'.format(*registro.split(','))) # *[1, 2, 3] funciona como spread do JS

arquivo.close()