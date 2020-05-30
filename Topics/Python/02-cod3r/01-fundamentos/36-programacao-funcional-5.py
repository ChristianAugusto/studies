

def filtrar_pares(_num):
    return _num % 2 == 0



if __name__ == '__main__':
    lista = [1, 2, 3, 4, 5, 6]

    filtrado = filter(filtrar_pares, lista)
    print(list(filtrado))
    print(tuple(filtrado)) # será vazio

    filtrado = filter(filtrar_pares, lista)
    print(tuple(filtrado))