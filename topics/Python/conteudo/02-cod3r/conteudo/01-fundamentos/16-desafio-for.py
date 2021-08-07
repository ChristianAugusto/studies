from random import randint


def sortearDado():
    return randint(1, 6)


dado = sortearDado()


for i in range(1, 7):
    if i % 2 != 0:
        continue

    if i == dado:
            print('ACERTOU')
            break
else:
    print('NÃO ACERTOU')