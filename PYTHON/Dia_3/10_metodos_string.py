texto = "Este es un texto de Federico"

resultado = texto.upper()
print(resultado)
resultado = texto[2].upper()
print(resultado)
resultado = texto.lower()
print(resultado)
resultado = texto.split()
print(resultado)
resultado = texto.split("t")
print(resultado)

a = "Aprender"
b = "Python"
c = "es"
d = "genial"
e = " ".join([a,b,c,d])
print(e)
print("---------------------------------------")
resultado = texto.find("s")
print(resultado)

resultado = texto.replace("Federico", "todos")
print(resultado)


texto = "Si la implementación es difícil de explicar, puede que sea una mala idea."
resultado = texto.replace("difícil","fácil")
resultado2 = resultado.replace("mala","buena")
print(resultado2)

