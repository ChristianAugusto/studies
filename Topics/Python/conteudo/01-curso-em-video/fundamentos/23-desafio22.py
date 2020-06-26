if __name__ == "__main__":
    nome = input('Digite seu nome completo: ').lstrip()

    print('Analisando seu nome...')

    print(f'Seu nome em maiúsculas é {nome.upper()}')
    print(f'Seu nome em minúsculas é {nome.lower()}')
    print(f'Seu nome tem ao todos {len(nome)} letras')
    print(nome.split(' '))
    primeiroNome = nome.split(' ')[0]
    print(f'Seu primeiro nome é {primeiroNome} e ele tem {len(primeiroNome)} letras')