texto = input("Ingresa un texto: \n")
letras = input("Agrega 3 letras aleatorias: \n")
texto = texto.lower()
respuesta = "python" in texto
letras = list(letras)
print('La letra: "' + letras[0] + '" se repite ' + str(texto.count(letras[0])) + ' veces, ' +
      'La letra: "' + letras[1] + '" se repite ' + str(texto.count(letras[1])) + ' veces, ' +
      'La letra: "' + letras[2] + '" se repite ' + str(texto.count(letras[2])) + ' veces')
lista_texto = texto.split() #crea una lista deacuerdo a las palabras del texto
print('El texto cuenta con : "' + str(len(lista_texto)) + '" palabras')
print('La letra inicial es: "' + str(texto[0]) + '" y la letra final "' + str(texto[-1]) + '"' )
lista_texto.reverse()
texto_invertido = ' '.join(lista_texto)
print('texto invertido: \n"' + texto_invertido + '"')
print('¿La palabra python se encuentra en el texto?\n' + str(respuesta))