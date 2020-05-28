class Humano:
    # Atributo de classe
    especie = 'Homo Sapiens'

    # Pertence a classe Humano
    @staticmethod
    def especies():
        return ('Habilis', 'Erectus', 'Neanderthalensis', 'Sapiens')

    # Pertence a uma classe, ele permite o polimorfismo
    @classmethod
    def is_evoluido(cls):
        return cls.especie.split(' ')[-1] == cls.especies()[-1]

    def __init__(self, nome):
        # Atributo de instância
        self.nome = nome

    # Método de instância
    def das_cavernas(self):
        self.especie = 'Homo Neanderthalensis'

    def teste(self):
        print('teste')


if __name__ == '__main__':
    jose = Humano('José')
    grokn = Humano('Grokn')
    grokn.das_cavernas()

    print(f'Humano.especie: {Humano.especie}')
    print(f'Humano.especie: {jose.especie}')
    print(f'Humano.especie: {grokn.especie}') # atributo de instância tem preferência em nomes iguais

    jose.teste()
    # Humano.teste(jose) # É possível

    print(Humano.especies())

    print(Humano.is_evoluido())