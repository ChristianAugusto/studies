litroTintaPinta = 2

largura = float( input("Digite a largura em metros: ") )
altura = float( input("Digite a altura em metros: ") )

area = altura * largura

necessario = area / litroTintaPinta

print("Serao necessarios: {}".format(necessario))