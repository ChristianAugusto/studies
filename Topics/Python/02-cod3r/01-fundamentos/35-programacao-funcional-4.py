

def dobrar(_num):
    print(_num)
    return _num * 2



if __name__ == '__main__':
    lista = [1, 2, 3, 4, 5, 6]

    dobros1 = list( map(dobrar, lista) )
    dobros2 = tuple( map(dobrar, lista) )

    print(dobros1)
    print(dobros2)
