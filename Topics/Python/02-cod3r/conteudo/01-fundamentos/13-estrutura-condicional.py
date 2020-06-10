def idadeNominal(idade):
    if idade >= 60:
        print('Melhor idade')
    elif idade in range (18, 60):
        print('Adulto')
    elif idade >= 13:
        print('Adolescente')
    elif idade >= 0:
        print('Criança')
    else:
        print('Idade inválida')


if __name__ == '__main__':
    idades = [60, 30, 18, 15, 13, 5, 0, -1]

    for idade in idades:
        idadeNominal(idade)