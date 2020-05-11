frase = "Curso em Video Python"

print(frase[0])
# frase[0] = "t" strings são imutaveis

# x:y:z
# inicio:final não incluso:pular de z em z

print(frase[9:13]) # Vide
print(frase[9:21]) # Video Python
print(frase[9:21:2]) # VdoPto
print(frase[:5]) # Curso
print(frase[15:]) # Python
print(frase[9::3]) # VePh


print("len(frase)", len(frase))
print("frase.count('o')", frase.count('o'))
print("frase.count('o', 0, 13)", frase.count('o', 0, 13))
print("frase.find('deo')", frase.find('deo')) # Tipo indexOf
print("frase.index('deo')", frase.index('deo')) # Tipo indexOf
print("'Curso' in frase", 'Curso' in frase)
print("frase.replace('Python', 'Android')", frase.replace('Python', 'Android')) # Não muda a string original
print("frase.upper()", frase.upper())
print("frase.upper()", frase.lower())
print("'foo foo foo'.capitalize()", 'foo foo foo'.capitalize()) # Deixa a primeira letra maiúscula
print("'foo foo foo'.title()", 'foo foo foo'.title()) # Deixa as primeiras letras de frase maiúsculas
print('"   foo foo foo   ".strip()', "   foo foo foo   ".strip()) # Tipo .trim()
print('"   foo foo foo   ".rstrip()', "   foo foo foo   ".rstrip()) # Tipo .trim() apenas na direita
print('"   foo foo foo   ".lstrip()', "   foo foo foo   ".lstrip()) # Tipo .trim() apenas na esquerda
print('"foo-foo-foo".split("-")', "foo-foo-foo".split("-"))
print('"-".join(frase)', "-".join(frase.split(" ")))
print(frase)
