"""
Dado um número inteiro positivo n, criar uma função que imprima os n primeiros naturais ímpares.
"""


def impares(n):
    numero = 0

    while n > 0:
        if not (numero % 2 == 0):
            print(numero)
            n -= 1

        numero += 1


def main():
    n = int(input('Digite o número n: '))
    if n <= 0:
        raise Exception('Entrada para o número n inválida')

    impares(n)


main()
