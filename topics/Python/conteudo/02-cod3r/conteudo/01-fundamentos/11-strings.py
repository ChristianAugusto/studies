nome = 'Pedro'

# nome[0] = 'a' #string não suporta atribuição

print(nome[::-1]) #Imprime a string reversa

print(len(nome))



a, b = 2, 3

sA = '%d / %d = %f' % (a, b, a/b) #mais antiga
sB = '%s, %r, %r' % ('foo', True, False) #mais antiga

sC = '{0} / {1} = {2}'.format(a, b, a/b) # recomentado python < 3.6
sD = f'{a} / {b} = {a/b}' # python >= 3.6

print(sA)
print(sB)
print(sC)
print(sD)