"""
Um quadrado mágico é aquele dividido em linhas e colunas, com um número em cada posição e no qual a soma das linhas, colunas e diagonais é a mesma.
Por exemplo, veja um quadrado mágico de lado 3, com números de 1 a 9:

8  3  4
1  5  9
6  7  2

Elabore uma função que identifica e mostra na tela todos os quadrados mágicos com as características acima.
Dica: produza todas as combinações possíveis e verifique a soma quando completar cada quadrado.
Usar um vetor de 1 a 9 parece ser mais simples que usar uma matriz 3x3.
"""


def eh_quadrado_magico(matriz):
    # linhas

    _sum = sum(matriz[0])

    if sum(matriz[1]) != _sum:
        return False

    if sum(matriz[2]) != _sum:
        return False

    # colunas

    if matriz[0][0] + matriz[1][0] + matriz[2][0] != _sum:
        return False

    if matriz[0][1] + matriz[1][1] + matriz[2][1] != _sum:
        return False

    if matriz[0][2] + matriz[1][2] + matriz[2][2] != _sum:
        return False

    # diagonais

    if matriz[0][0] + matriz[1][1] + matriz[2][2] != _sum:
        return False

    if matriz[0][2] + matriz[1][1] + matriz[2][0] != _sum:
        return False

    return True


def fn(matriz):
    pass


def main():
    print(eh_quadrado_magico([
        [8, 3, 4],
        [1, 5, 9],
        [6, 7, 2]
    ]))

    print(eh_quadrado_magico([
        [8, 3, 2],
        [1, 5, 9],
        [6, 7, 2]
    ]))


main()
