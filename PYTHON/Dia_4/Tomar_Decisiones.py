#if 5 == 2
if 10 > 15:
    print("Es correcto")
else:
    print("No es correcto")
#-------------------------------------
mascota = "perro"
if mascota == "gato":
    print('Tienes un gato')
elif mascota == "perro":
    print('Tienes un perro')
elif mascota == "pez":
    print('Tienes un pez')
else:
    print('No sé qué animal tienes')
#-------------------------------------
edad = 7
calificacion = 9
if edad<18:
    print('Eres menor de edad')
    if calificacion >= 7:
        print('Pasaste')
    else:
        print('No pasaste')
else:
    print('Eres mayor de edad')

