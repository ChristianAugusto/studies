# vai garantir que o arquivo será fechado com o Python

with open('./pessoas.csv') as arquivo: # vai abrir o arquivo e colocar na variável arquivo
    for registro in arquivo:
        print('Nome: {}, Idade: {}'.format(*registro.strip().split(',')))