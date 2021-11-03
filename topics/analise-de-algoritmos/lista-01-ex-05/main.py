def fibonacci(i):
    if i in [0, 1]:
        return 1

    return fibonacci(i - 1) + fibonacci(i - 2)


def main():
    print(fibonacci(0))
    print(fibonacci(1))
    print(fibonacci(2))
    print(fibonacci(3))
    print(fibonacci(4))


main()
