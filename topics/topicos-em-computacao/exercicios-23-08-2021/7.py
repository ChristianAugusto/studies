"""
Dizemos que um número natural é triangular se ele é produto de três números naturais consecutivos.
"""


def main():
    numero = int(input('Digite um número: '))
    if numero <= 0:
        raise Exception('Entrada para o número n inválida')

    i = 0

    while True:
        resultado = i * (i + 1) * (i + 2)

        if resultado == numero:
            print(
                f'O número {numero} é triangular, {i} * {i+1} * {i+2} = {numero}')
        elif resultado > numero:
            break

        i += 1

    print(f'O número {numero} não é triangular')


main()
