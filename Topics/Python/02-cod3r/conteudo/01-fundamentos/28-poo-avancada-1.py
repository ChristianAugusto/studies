class Humano:
    #atributo de classe
    especie = 'Homo Sapiens'

    def __init__(self, nome):
        #atributo de instância
        self.nome = nome

    def das_cavernas(self):
        self.especie = 'Homo Neanderthalensis'


if __name__ == '__main__':
    jose = Humano('José')
    grokn = Humano('Grokn')
    grokn.das_cavernas()

    print(f'Humano.especie: {Humano.especie}')
    print(f'Humano.especie: {jose.especie}')
    print(f'Humano.especie: {grokn.especie}') # atributo de instância tem preferência em nomes iguais