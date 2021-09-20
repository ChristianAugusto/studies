"""
Crie uma lambda function e uma CL que retorne múltiplos de 5 maiores que 0 e menores que 80.
"""

response = lambda: [i for i in range(5,80,5)]


def main():
    print(response())


main()
