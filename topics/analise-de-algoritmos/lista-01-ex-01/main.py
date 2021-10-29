def buscar_elemento(A, v):
    for i in range(0, len(A)):
        if A[i] == v:
            return i

    return None


def main():
    A = [10, 20, 30, 40]

    print(buscar_elemento(A, 20))
    print(buscar_elemento(A, 1))


main()
