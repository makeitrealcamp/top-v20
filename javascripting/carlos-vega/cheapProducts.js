// cheap products
// Write a function called cheapProducts that receive an array of products as an argument.
//Each product has a name and a price.
//Return an array with the name of products which value is less than 10.
//If there are no products that meet this condition then return an empty array.

const products1 = [
    {name:'rice', price:10},
    {name:'panela', price:5},
    {name:'pasta', price:16},
    {name:'eggs', price:8},
];

const products2 = [
    {name:'rice', price:10},
    {name:'panela', price:20},
    {name:'pasta', price:16},
    {name:'eggs', price:37},
];

/**
 * 
 * @param {*} arr 
 * @returns 
 */
function cheapProducts(arr){
    let count=[];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].price <10){
            count.push(arr[index]);
        }
    }
    return count;
}

console.log(cheapProducts(products1));
