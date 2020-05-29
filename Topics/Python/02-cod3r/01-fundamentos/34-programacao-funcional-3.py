

def dobro(_num):
    return _num * 2



if __name__ == '__main__':
    lista = [1, 2, 3, 4, 5, 6]

    dobros1 = []
    for num in lista:
        dobros1.append(dobro(num))

    dobros2 = list( map(lambda i: i * 2, lista) )
    dobros3 = tuple( map(lambda i: i * 2, lista) )

    print(dobros1)
    print(dobros2)
    print(dobros3)
