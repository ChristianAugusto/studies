from math import pi
import sys
import errno


def circulo(raio):
    return pi * float(raio) ** 2


if __name__ == '__main__': # Valida se é o módulo principal
    raio = input('Digite o valor do raio: ')

    if not raio.isnumeric():
        print('O raio deve ser um valor numérico')
        sys.exit(errno.EINVAL)

    area = circulo(raio)
    print('Área do círculo', area)