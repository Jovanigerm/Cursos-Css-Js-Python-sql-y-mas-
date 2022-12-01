mi_set = set([1,2,3,(12,41,2,4),4,5,1,2,4])
'''
se puede ejecutar dentro de [],{},()
Si soporta tuples
'''
print(type(mi_set))
print(mi_set)
otro_set = {1,2,3}
print(2 in mi_set)
'''
---------No soporta listas y dicionarios 
print(mi_set[0])  // Dentro de un set no se puede encontrar un posicionamiento
print(type(otro_set))
print(otro_set)
'''

s1 = {1,2,3,7,8,9}
s2 = {3,4,5}
s3 = s1.union(s2)
print(s3)
s1.add(4) #add( ) agrega nuevos elementos
s1.remove(3) #remove( ) elimina elementos
s1.discard(6) #discar( ) elimina elementos, pero si no existe el valor no ocacionara errores
sorteo = s1.pop() #pop( ) dentro de los set elimina un elemento aleatorio
print(s1)
s1.clear() #clear( ) remueve todos los elementos de un set
print(s1)

print(sorteo)