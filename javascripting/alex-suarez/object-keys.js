/*
 # JAVASCRIPTING

 ## LLAVES/KEYS DE OBJETOS (Ejercicio 17 de 20)

  JavaScript nos da una manera nativa de listar todas las llaves (keys) de
  un objeto. Esto puede ser muy útil para iterar sobre las propiedades de un
  objeto y manipular sus valores.

  Veámos un ejemplo de cómo podríamos listar todas las propiedades de un
  objeto usando el método Object.keys():

     const car = {
       make: 'Toyota',
       model: 'Camry',
       year: 2020
     }
     const keys = Object.keys(car)

     console.log(keys)

  El código de arriba imprime un arreglo de strings, donde cada string es
  una llave (key) en el objeto car (['make', 'model', 'year']).

 ## El ejercicio:

  Crea un archivo llamado object-keys.js.

  En ese archivo, define una variable llamada car:

     const car = {
       make: 'Honda',
       model: 'Accord',
       year: 2020
     }

  Después define otra variable llamada keys:

     const keys = Object.keys(car)

  Usa console.log() para imprimir la variable keys en la consola.

  Comprueba si tu programa es correcto ejecutando el siguiente comando:

     javascripting verify object-keys.js
*/
const car={
  make:"Honda",
  model:"Accord",
  year:2020
}
const keys=Object.keys(car)
console.log(keys)