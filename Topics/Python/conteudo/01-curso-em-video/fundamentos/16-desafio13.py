reajuste = 15

salario = float( input("Digite seu salario: ") )
novoSalario = salario + (salario * reajuste / 100)

print("Seu salario com {}% de reajust eh: R$ {:.2f}".format(reajuste, novoSalario))