def eh_triangular(numero):
    i = 1


    while True:
        res = i * (i + 1) * (i + 2)


        if res > numero:
            return False
        elif res == numero:
            return True


        i += 1



def main():
    numero = int(input('Digite o número: '))


    if numero < 0:
        raise Exception('Entrada para o número numero inválida')


    print(eh_triangular(numero))



main()
