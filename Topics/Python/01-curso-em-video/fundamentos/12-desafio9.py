numero = int( input("Digite um numero inteiro: ") )

# Maneira 1:
# print("Maneira 1:")
# print("{} x 1 = {}".format(numero, numero*1))
# print("{} x 2 = {}".format(numero, numero*2))
# print("{} x 3 = {}".format(numero, numero*3))
# print("{} x 4 = {}".format(numero, numero*4))
# print("{} x 5 = {}".format(numero, numero*5))
# print("{} x 6 = {}".format(numero, numero*6))
# print("{} x 7 = {}".format(numero, numero*7))
# print("{} x 8 = {}".format(numero, numero*8))
# print("{} x 9 = {}".format(numero, numero*9))
# print("{} x 10 = {}".format(numero, numero*10))

# Maneira 2:
# print("Maneira 2:")
# for i in range(10):
#     print("{} x {} = {}".format(numero, i+1, numero*(i + 1)))

# Maneira 3:
print("Maneira 3:")
count = 1
while count <= 10:
    print("{} x {} = {}".format(numero, count, numero*count))
    count += 1