# de 0 a < 5
for i in range(5):
    print(i)

print('==========')

# de 1 a < 5
for i in range(1, 5):
    print(i)

print('==========')
print(i) #ainda é visível
print('==========')

count = 0
while count < 5:
    print(count)
    count += 1


print('==========')


dicionario = {
    'nome': 'Caneta Chic',
    'preco': 14.99,
    'importada': True,
    'estoque': 793
}

for chave in dicionario: # pode ser também dicionario.keys()
    print(chave)


print('==========')


for chave in dicionario.values():
    print(chave)


print('==========')


for chave, valor in dicionario.items():
    print("{0}: {1}".format(chave, valor))