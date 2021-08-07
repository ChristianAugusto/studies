from datetime import datetime

class Tarefa:
    def __init__(self, descricao):
        self.descricao = descricao
        self.feito = False
        self.criacao = datetime.now()

    def concluir(self):
        self.feito = True

    def __str__(self):
        return self.descricao + (' (Conluída)' if self.feito else '')


casa = []
casa.append(Tarefa('Passar roupa'))
casa.append(Tarefa('Lavar prato'))

# Desafio
for tarefa in casa:
    if tarefa.descricao == 'Lavar prato':
        tarefa.concluir()
    print(tarefa)