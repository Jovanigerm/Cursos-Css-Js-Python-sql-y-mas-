texto = "ABCDEFGHIJKLM"
fragmento = texto[2:5]
print(fragmento)
fragmento = texto[2:]
print(fragmento)
fragmento = texto[:5]
print(fragmento)
fragmento = texto[2:10:2]
print(fragmento)
print("-------------------------------------------------")
fragmento = texto[::2]
print(fragmento)
fragmento = texto[::-2]
print(fragmento)

frase = "Controlar la complejidad es la esencia de la programación"
resultado = frase[:8]
print(resultado)