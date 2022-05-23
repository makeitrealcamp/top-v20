//Write a function called `cheapProducts` that receives an array of products as an argument. Each product has a `name` and a `price`. Return an array with the name of the products which value is less than 10. If there are no products that meet this condition then return an empty array.

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

/**
 *  return products with a price less than 10
 * @param {array} array  list of products
 * @returns  product with price < than 10
 */

const cheapProducts = (product1) => {
  return (newArray = product1
    .filter(({ price }) => price < 10)
    .map((produc) => produc.name));
};

console.log(cheapProducts(products1)); // ['panela', 'eggs']
console.log(cheapProducts(products2)); // []
