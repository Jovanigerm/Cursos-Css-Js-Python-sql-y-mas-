mi_lista = ['a', 'b','c']
mi_lista2 = ['d','e','f']
mi_lista3 = mi_lista+mi_lista2
mi_lista3.append('g')
otra_lista = ['hola',55,6.1]
resultado = len(mi_lista3)
eliminado = mi_lista3.pop(0)
print(type(mi_lista))
print(resultado)
print(mi_lista+mi_lista2)
print(mi_lista3)
print(eliminado)

lista = ['s','g','a','z']
lista.sort()
print("--------------------------------------------")
print(lista)
lista.reverse()
print(lista)
