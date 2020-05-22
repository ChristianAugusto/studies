class Animal:
    def __init__(self, nome):
        self.nome = nome

    def respirar(self):
        print('respirou')


class Mamifero(Animal):
    def respirar(self):
        super().respirar()
        return 'CO2'


m1 = Mamifero('cachorro')

print(m1.respirar())
