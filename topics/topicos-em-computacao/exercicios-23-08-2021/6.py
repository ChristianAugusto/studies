"""
Dados n e uma seqüência de n números inteiros, determinar a soma dos números pares.
"""


def main():
    n = int(input('Digite o número n: '))
    if n <= 0:
        raise Exception('Entrada para o número n inválida')

    soma = 0

    while n > 0:
        numero = int(input('Digite um número: '))

        if numero % 2 == 0:
            soma += numero

        n -= 1

    print(f'Soma = {soma}')


main()
