from functools import reduce


def fatorial(num):
    if num < 1:
        return 1
    return num * fatorial(num - 1)


if __name__ == '__main__':
    print(fatorial(3))
    # print(fatorial(997)) # limite de call stack