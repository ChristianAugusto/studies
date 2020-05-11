'''
Uma função em python possui 2 tipos de parâmetros: Posicional e NOMEADO

def a(p1, p2, p3):
    return p1 * p2 + p3

print(a(2, 3, 4))
print(a(2, p3 = 4, p2 = 3))

*args -> tupla
**args -> dict
'''


def tag_bloco(texto, classe='success'): # classe possui um valor padrão
    return f'<div class="{classe}">{texto}</div>'


print(tag_bloco('Teste1'))
print(tag_bloco('Teste2'))