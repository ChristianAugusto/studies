from functools import reduce



if __name__ == '__main__':
    lista = [1, 2, 3, 4, 5, 6]

    soma_pares = reduce(lambda acc, num: acc + num if num % 2 == 0 else acc, lista, 0) # funcao, lista, valor inicial do acumulador
    print(soma_pares)