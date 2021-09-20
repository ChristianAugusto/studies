"""
Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721
"""


def fn(number):
    if not isinstance(number, int):
        raise Exception('O argumento informado não é um inteiro')

    eh_negativo = number < 0

    if eh_negativo:
        number *= -1

    reverse_number = int(str(number)[::-1])

    if eh_negativo:
        reverse_number *= -1

    return reverse_number


def main():
    numero = input('Informe o número inteiro: ')

    print(fn(int(numero)))


main()
