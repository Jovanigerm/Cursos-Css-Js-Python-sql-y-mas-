lista = ['a','b','c']
indice = 0
for item in lista:
    print(indice,item)
    indice +=1
print('--------------------------------')
for item in enumerate(range(50,61)):
    print(item)
print('--------------------------------')
mi_tuples = list(enumerate(lista))
print(mi_tuples[1][0])

print('--------------------------------')
