# Essa versão aloca na memória somente o que foi pedido

arquivo = open('./pessoas.csv')

for registro in arquivo:
    print('Nome: {}, Idade: {}'.format(*registro.split(',')), end="")

arquivo.close()