"""
Elaborar algoritmo de busca de número inteiro em um array tamanho n (não há repetição, cada entrada é única) e demonstrar o O(n) do seu algoritmo. (array não ordenado)
"""

def main():
    target = 5

    numbers = [23, 20, 10, 12, 5, 17, 1, 3]

    index = -1

    for i in range(len(numbers)):
        if numbers[i] == target:
            index = i
            break

    print(f'Index = {index}')


main()
