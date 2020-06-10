from locale import setlocale, LC_ALL
from calendar import mdays, month_name
from functools import reduce

# Português do Brasil
setlocale(LC_ALL, 'pt_BR')


meses_e_dias = []
for i in range(1, len(mdays)):
    meses_e_dias.append({
        "nome": month_name[i],
        "dias": mdays[i]
    })

for i in range(1, len(meses_e_dias)):
    if meses_e_dias[i]["dias"] == 31:
        print(f'{meses_e_dias[i]["nome"]} - {meses_e_dias[i]["dias"]}')
