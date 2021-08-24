"""
Dados números inteiros n, i e j, todos maiores do que zero, imprimir em ordem crescente os n primeiros naturais que são múltiplos de i ou de j e ou de ambos.
"""


def main():
    n = int(input('Digite o número n: '))
    if n <= 0:
        raise Exception('Entrada para o número n inválida')

    i = int(input('Digite o número i: '))
    if i <= 0:
        raise Exception('Entrada para o número i inválida')

    j = int(input('Digite o número j: '))
    if j <= 0:
        raise Exception('Entrada para o número j inválida')

    numero = 0

    while n > 0:
        if numero % i == 0 or numero % j == 0:
            print(numero)
            n -= 1

        numero += 1


main()
