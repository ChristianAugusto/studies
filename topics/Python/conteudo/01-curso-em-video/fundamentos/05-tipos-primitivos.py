# int, float, bool, str

# int => 7 -4 0 -9875
# float => 7.4 7.0 0.076
# bool => True False
# str => 'Ola' "Hello World"

nome = 2
print('type(nome)', type(nome))
print("type(nome) == int", type(nome) == int) # True

entrada1 = "foo"
entrada2 = "2"
print("entrada1.isnumeric()", entrada1.isnumeric())
print('entrada2.isnumeric()', entrada2.isnumeric()) # isnumeric() diz se é possível converter o conteúdo da variável para string


entrada3 = "sadas"
# print(int(entrada3)) gera erro se a entrada for