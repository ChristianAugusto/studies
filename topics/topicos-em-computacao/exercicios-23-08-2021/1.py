"""
Ler uma sequência de números inteiros diferentes de zero e calcular a sua soma. Para leitura, utilize a função input(), como no exemplo abaixo:
numero = int(input('Entre com um número inteiro: '))
O seu programa deverá continuar lendo números inteiros, até que o usuário coloque o número 0 (zero). Ao isso acontecer, deverá exibir a soma de todos os números que foram informados.
"""


def main():
    soma = 0

    numero = None

    while True:
        numero = int(input('Entre com um número inteiro: '))

        if numero == 0:
            break

        soma += numero

    print(f'Soma = {soma}')


main()
