/*
## FILTRADO DE ARRAYS (Ejercicio 12 de 20)

─────────────────────────────────────────────────────────────────────────────


# FILTRADO DE ARRAYS

 Los arrays poseen métodos predefinidos que nos permiten manipularlos.

 Por ejemplo, los métodos forEach, map, some y filter son bastante
 utilizados.

 Algo muy común es filtrar arrays para que contengan sólo ciertos valores.

 Para esto podemos utilizar el método .filter.

 Por ejemplo:

    const pets = ['cat', 'dog', 'elephant']

    const filtered = pets.filter(function (pet) {
      return (pet !== 'elephant')
    })

 La variable filtered será igual a un array que contiene solo cat y dog.

## El ejercicio:

 Crea un archivo llamado filtrado-de-arrays.js.

 En ese archivo, define una variable llamada numbers que referencie al
 siguiente array:

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 Luego, define una variable llamada filtered que referencie el resultado de
 numbers.filter().

 La función que recibe .filter() será algo cómo lo siguiente:

    function evenNumbers (number) {
      return number % 2 === 0
    }

 Utiliza console.log() para imprimir el array filtrado a la terminal.

 Comprueba si tu programa es correcto ejecutando el siguiente comando:

    javascripting verify filtrado-de-arrays.js
*/
const numbers =[1,2,3,4,5,6,7,8,9,10];
const filtered=numbers.filter(function evenNumbers(number){
  return number %2===0;
})
console.log(filtered)