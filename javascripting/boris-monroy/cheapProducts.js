/*Cheap Products

Write a function called `cheapProducts` that receives an array of products as an argument. Each product has a `name` and a `price`. Return an array with the name of the products which value is less than 10. 
If there are no products that meet this condition then return an empty array.
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

function cheapProducts(arr) {
    let resultado=[];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].price<10){
            resultado.push(arr[i].name)
        }
        
    }
    return resultado
}

console.log(cheapProducts(products1)); // ['panela', 'eggs']
console.log(cheapProducts(products2)); // []

/*function cheapProducts(arr){
    for (const product of arr){
        if (product.price<10) {
            cheapProducts.push(product.name)
        }
    }
    return cheapProducts
}
console.log(cheapProducts(products1)); // ['panela', 'eggs']
console.log(cheapProducts(products2)); // []*/

/*function cheapProducts(array) {
    return array.filter(product => product.price < 10 )
}*/


