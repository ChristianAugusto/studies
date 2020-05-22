class Data:
    def __init__(self, dia, mes, ano): # método construtor, não é suportado a sobrecarga de método
        self.dia = dia
        self.mes = mes
        self.ano = ano
        print('opa')

    def __str__(self):
        return f'{self.dia}/{self.mes}/{self.ano}'


d1 = Data(dia=5, mes=12, ano=2019)

print(d1)