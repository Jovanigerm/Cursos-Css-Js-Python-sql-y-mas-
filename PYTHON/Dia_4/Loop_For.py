lista = ['a','b','c','d']
for variable in lista:
    numero_variable = lista.index(variable) + 1
    print(f"Letra {numero_variable} : {variable} " )
print("-------------------------------------------")
lista = ['pablo','laura','fede','luis','julia']
for nombre in lista:
    if nombre.startswith('l'):
        print(nombre)
    else:
        print(f"Nombre que no empieza con l :'{nombre}'")
print("-------------------------------------------")
numeros = [1,2,3,4,5]
mi_valor = 0
for numero in numeros:
    mi_valor = mi_valor+numero
print(mi_valor)
print("-------------------------------------------")
#palabra = 'python'
#for letra in palabra:
for letra in 'python':
    print(letra)
print("-------------------------------------------")
for a,b in [[1,2],[3,4],[5,6]]:
    print(a)
    print(b)
print("-------------------------------------------")
dic = {'clave1':'a','clave2':'b','clave3':'c'}
for a,b in dic.items(): #.values() o .items()
    print(a,b) #item

print("-------------------------------------------")

lista_numeros = [1,5,8,7,6,8,2,5,2,6,4,8,5,9,8,3,5,4,2,5,6,4]
suma_pares = 0
suma_impares = 0
for n in lista_numeros:
    if n%2 == 0:
        suma_pares = suma_pares + n
    else:
        suma_impares  = suma_impares + n
print(suma_pares)
print(suma_impares)