import numpy as np

B = np.array([2,3,4,5,6,7,8,9])

print(f"Imprimindo o array: {B}")
print(f"Dimensões do array: {B.shape}")
print(f"Tipo dos elementos: {B.dtype}")

B2 = np.array([
    [2, 3, 4],
    [3, 4, 5]
])

print(f"Imprimindo a matriz: {B2}")
print(f"Dimensões da matriz: {B2.shape}")
print(f"Número de linhas: {B2.shape[0]}")
print(f"Número de colunas: {B2.shape[1]}")
print(f"Dimensões da matriz: {B2.shape}")
print(f"Tipo dos elementos: {B2.dtype}")
