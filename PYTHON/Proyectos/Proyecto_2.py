nombre = input("Cual es tu nombre: ")
ventas = input("Cuanto vendiste: ")
ventas = float(ventas)
ganancias = round(ventas * 13 / 100, 2)
print(f"ok {nombre}. Este mes ganaste {ganancias}")