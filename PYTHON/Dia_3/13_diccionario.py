diccionario = {'c1':'valor','c2':'valor'}
print(type(diccionario))
print(diccionario)
resultado = diccionario['c1']
print(resultado)

cliente={'nombre':'Juan','apellido':'Fuentes','peso':88,'talla':1.76}
resultado2 = (cliente['nombre'])
print(resultado2)
dic ={'c1':55,'c2':[10,20,30],'c3':{'s1':100,'s2':200}}
print(dic['c3']['s2'])
dic= {'c1':['a','b','c'],'c2':['d','e','f']}
print(dic['c2'][1].upper())

dic = {1:'a',2:'b'}
print(dic)
dic[3] = 'c'
print(dic)
dic[2] = 'B'
print(dic)
print(dic.keys())
print(dic.values())
print(dic.items())

mi_dic = {"nombre":"Karen", "apellido":"Jurgens", "edad":35, "ocupacion":"Periodista"}
mi_dic['nombre']='Karen'
mi_dic["apellido"]='Jungens'
mi_dic["edad"]=36
mi_dic["ocupacion"]='editora'
mi_dic['pais'] = 'Colombia'
print(mi_dic)