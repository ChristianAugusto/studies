"""
Faça um programa, com uma função que necessite de um argumento.
A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.
"""


def fn(arg):
    if arg > 0:
        return 'P'

    return 'N'


def main():
    n = int(input('Informe o número do argumento '))

    print(fn(n))


main()
