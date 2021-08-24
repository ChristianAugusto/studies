"""
Dado um inteiro positivo n, verificar se n é primo.
"""


def main():
    n = int(input('Digite o número n: '))
    if n <= 0:
        raise Exception('Entrada para o número n inválida')

    i = n // 2

    while i > 1:
        if n % i == 0:
            print(f'O número {n} não é primo')
            break

        i -= 1
    else:
        print(f'O número {n} é primo')


main()
