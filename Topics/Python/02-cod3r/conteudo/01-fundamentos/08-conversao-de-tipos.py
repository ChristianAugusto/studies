import re

print(2 + 3.4)
print(int(3.4))
print(int('2'))
# print(int('2 ssas'))

print( int(re.sub('\D', '', '2 ssas')) )