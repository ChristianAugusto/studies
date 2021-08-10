string = 'aababcac'

# string[0] = 'b' # Não permitido

print(
    string.replace('a', 'b').replace('c', 'd').replace(
        'c', 'd').replace('c', 'd').replace('c', 'd').replace('c', 'd')
)

print(string)
