"""
Dado um número inteiro n >= 0, calcular n! (fatorial de n):
"""


def main():
    n = int(input('Digite o número n: '))

    if n < 0:
        raise Exception('Entrada para o número n inválida')

    fatorial = 1

    while n > 1:
        fatorial *= n
        n -= 1

    print(f'Fatorial = {fatorial}')


main()
