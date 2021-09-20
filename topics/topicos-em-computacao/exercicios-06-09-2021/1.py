"""
Dados números inteiros n e k, com k >= 0, criar uma função que retorne o valor de n elevado a k.
Por exemplo, dados os números 3 e 4 o seu programa deve retornar o número 81.

OBS: Não passar autopep nesse arquivo
"""


potencia = lambda num, exp: num ** exp


def main():
    n = int(input("Digite o número n: "))

    k = int(input("Digite o número k: "))
    if k < 0:
        raise Exception("Entrada para o número k inválida")

    print(potencia(n, k))


main()
