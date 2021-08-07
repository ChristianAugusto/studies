class Data:
    def __str__(self): # esse método funciona igual ao toString
        return f'{self.dia}/{self.mes}/{self.ano}' #self é o this, mas vem por parâmetro


d1 = Data()

d1.dia = 5
d1.mes = 12
d1.ano = 2019

print(d1)