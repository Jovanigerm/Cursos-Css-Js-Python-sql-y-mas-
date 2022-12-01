monedas = 5
while monedas > 0:
    print(f"Tengo {monedas} monedas")
    monedas -= 1
else:
    print("No tengo mas dinero")
print("______________________________________")
respuesta = 's'
while respuesta == 's':
    respuesta = input("Quieres segir? (s/n)")
else:
    print("Gracias")

print("______________________________________")
nombre = input("Tu nombre: ")
for letra in nombre:
    if letra == 'r':
        #pass
        #break
        continue
    print(letra)
