from matplotlib import pyplot as plt
import numpy as np


def histograma(rk, nk, mn):
    p = []

    for i in range(0, 16):
        p.append(nk[i] / mn)

    plt.bar(rk, p)
    plt.ylabel("p(r)")
    plt.xlabel("r")
    plt.show()


def histograma_equalizado(nk, l, mn):
    s = []
    p = []

    acc = 0

    for i in range(0, 16):
        result = nk[i] / mn
        acc += (result) * (l - 1)  # Função de distribuição cumulativa

        s.append(round(acc))  # arredondamento acumulador
        p.append(result)

    plt.bar(s, p)
    plt.ylabel("p(s)")
    plt.xlabel("s")
    plt.show()


def main():
    l = 16
    mn = 360
    rk = [f"{i}" for i in range(0, 16)]
    nk = [
        15, 0, 0, 0, 0, 0, 0, 0, 0, 70, 110, 45, 80, 40, 0, 0
    ]

    """
        Realizar uma execução de programa para uma das funções abaixo, exemplo:

        histograma(rk, nk, mn)
        # histograma_equalizado(nk, l, mn)

        ou

        # histograma(rk, nk, mn)
        histograma_equalizado(nk, l, mn)
    """

    # histograma(rk, nk, mn)
    # histograma_equalizado(nk, l, mn)


main()
