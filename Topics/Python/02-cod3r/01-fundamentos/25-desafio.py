# delta=5 (padrão)
class Carro:
    def __init__(self, velMax):
        self.velMax = velMax
        self.velAtual = 0

    def acelerar(self, delta=5):
        res = self.velAtual + delta
        self.velAtual = res if res<=self.velMax else self.velMax
        return self.velAtual

    def frear(self, delta=5):
        res = self.velAtual - delta
        self.velAtual = res if res>=0 else 0
        return self.velAtual

    # def acelerar(self, delta=5):
    #     res = self.velAtual + delta
    #     if res <= self.velMax:
    #         self.velAtual = res
    #     else:
    #         self.velAtual = self.velMax
    #     return self.velAtual

    # def frear(self, delta=5):
    #     res = self.velAtual - delta
    #     if res >= 0:
    #         self.velAtual = res
    #     else:
    #         self.velAtual = 0
    #     return self.velAtual









c1 = Carro(180) # vel máxima

for i in range(0, 25):
    print(c1.acelerar(8))

print('-------------------------------------------')

for i in range(0, 10):
    print(c1.frear(delta=20))
