nombres = ['Ana', 'Hugo', 'Valeria']
edades = [65,29,42,55]
ciudades = ['Lima','Madird','Mexico']
combinados = list(zip(nombres, edades,ciudades))

for nombres,edades,ciudades in combinados:
    print(f'{nombres} tiene { edades } años y vive en {ciudades} ')


