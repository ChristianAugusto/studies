def func(**foo):
    print(foo)


dic1 = {
    'prop1': 'val1',
    'prop2': 'val2'
}

dic2 = {**dic1}

print(dic1)
print(dic2)