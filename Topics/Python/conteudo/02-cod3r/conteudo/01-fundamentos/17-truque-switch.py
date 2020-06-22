def switch(valor):
    cases = {
        1: 'batata',
        2: 'cenoura',
        3: 'beterraba'
    }

    return cases.get(valor, 'inválido')



for valor in range(0, 9):
    print(f'{valor}: {switch(valor)}')