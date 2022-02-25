/*
Cheap Products

Write a function called `cheapProducts` that receives an array of products as an argument. Each product has a `name` and a `price`. Return an array with the name of the products which value is less than 10. If there are no products that meet this condition then return an empty array.
*/

const products1 = [ 
  { name: "rice", price: 10 }, 
  { name: "panela", price: 5 }, 
  { name: "pasta", price: 16 }, 
  { name: "eggs", price: 8 },
];

const products2 = [ 
  { name: "rice", price: 10 }, 
  { name: "panela", price: 20 }, 
  { name: "pasta", price: 16 }, 
  { name: "eggs", price: 37 },
];

console.log(cheapProducts(products1)); // ['panela', 'eggs'] 
console.log(cheapProducts(products2)); // []

function cheapProducts(arr){
    /*
    let arr_aux=[];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].price < 10) {
            arr_aux.push(arr[index].name);
        }
    }
    */
   const arr_aux = arr
   .filter(product => product.price < 10)
   .map(product => product.name);
   
   return arr_aux;
}