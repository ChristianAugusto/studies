"""
Dado um número inteiro n >= 0, criar uma função para calcular fatorial de n (n!):
"""


def fatorial(n):
    fatorial = 1

    while n > 1:
        fatorial *= n
        n -= 1

    return fatorial


def main():
    n = int(input('Digite o número n: '))

    if n < 0:
        raise Exception('Entrada para o número n inválida')

    print(fatorial(n))


main()
