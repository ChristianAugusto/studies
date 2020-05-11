try:
    arquivo = open('./pessoas.csv')

    for registro in arquivo:
        print('Nome: {}, Idade: {}'.format(*registro.strip().split(',')))
except IndexError:
    pass # indica um bloco vazio
finally:
    arquivo.close()