# estaChovendo = True
estaChovendo = False

#                                    False      True
print('Hoje estou com as roupas ' + ('secas.', 'molhadas.')[estaChovendo])

estaChovendo = True

print('Hoje estou com as roupas ' + ('molhadas.' if estaChovendo else 'secas.'))