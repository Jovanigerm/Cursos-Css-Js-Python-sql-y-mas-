mi_tuple = (1,2,3,4) # Los tuple son listas que no se le puede alterar su contenido y se indican entre parentesis
print(type(mi_tuple))
print(mi_tuple[-2])
'''mi_tuple[0]=5
print(mi_tuple)'''
mi_tuple2 = (1,2,(10,20),4)
mi_tuple = list(mi_tuple2)
print(type(mi_tuple))
mi_tuple = tuple(mi_tuple)
print(type(mi_tuple))

t= (1,2,3)
x,y,z = t
print(x,y,z)

t = (1,2,3,1)
print(len(t))
print(t.count(1)) #count permite contar
print(t.index(2)) #Index indica el indice en el que se encuentra

