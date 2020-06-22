def soma_2(a, b):
    return a + b

def soma_n(*numeros):
    # numeros é uma tupla
    return sum(numeros)


# packing
print(soma_2(1, 2))
print(soma_n(1, 2))
print(soma_n(1, 1, 1, 1, 1, 1, 1))

# unpacking
print(*(1, 1, 1, 1, 1, 1, 1))