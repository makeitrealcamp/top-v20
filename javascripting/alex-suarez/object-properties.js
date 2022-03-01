/*
 ## PROPIEDADES DE OBJETOS (Ejercicio 16 de 20)

  Puedes acceder y manipular propiedades de objetos –– las llaves y valores
  que un objeto contiene –– utilizando una forma muy similar que con arrays.

  Un ejemplo usando corchetes:

     const example = {
       pizza: 'yummy'
     }

     console.log(example['pizza'])

  El código anterior imprimirá el string yummy en la terminal.

  También puedes usar la notación de punto para obtener resultados
  idénticos:

     example.pizza

     example['pizza']

  Las dos líneas de código anteriores retornarán yummy.

 ## El ejercicio:

  Crea un archivo llamado object-properties.js.

  En ese archivo, define una variable llamada food de la siguiente forma:

     const food = {
       types: 'only pizza'
     }

  Utiliza console.log() para imprimir la propiedad types del objeto food en
  la terminal.

  Comprueba si tu programa es correcto ejecutando el siguiente comando:

     javascripting verify object-properties.js
*/
const food={
  types:'only pizza'
}
console.log(food.types)