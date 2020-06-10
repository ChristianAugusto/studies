from functools import reduce


def mdc(numeros):
    menor = min(numeros)

    divisor = menor
    while divisor > 1:
        divide = reduce(lambda acc, numero: numero % divisor == 0 if acc == True else acc, numeros, True)
        if divide:
            return divisor
        divisor -= 1

    return 1

def mdc_recursivo(numeros, subtrator=0):
    divisor = min(numeros) - subtrator
    if divisor == 1:
        return 1
    elif (reduce(lambda acc, numero: numero % divisor == 0 if acc == True else acc, numeros, True)):
        return divisor
    else:
        return mdc_recursivo(numeros, subtrator+1)



if __name__ == '__main__':
    print(mdc( (21, 7) ))
    print(mdc( (125, 40) ))
    print(mdc( (9, 564, 66, 3) ))
    print(mdc( (55, 22) ))
    print(mdc( (15, 150) ))
    print(mdc( (7, 9) ))

    print('------------')

    print(mdc_recursivo( (21, 7) ))
    print(mdc_recursivo( (125, 40) ))
    print(mdc_recursivo( (9, 564, 66, 3) ))
    print(mdc_recursivo( (55, 22) ))
    print(mdc_recursivo( (15, 150) ))
    print(mdc_recursivo( (7, 9) ))