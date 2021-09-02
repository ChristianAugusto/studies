def n_esima_linha(n):
    for i in range(1, n+1):
        for j in range(1, i+1):
            print(j, end=" ")

        print("\n")

        i += 1


def main():
    n = int(input("Informe o n (inteiro): "))

    if n <= 0:
        raise Exception("Entrada para n inválida")

    n_esima_linha(n)


main()
