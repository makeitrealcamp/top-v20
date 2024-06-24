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

function cheapProducts(array) {
    const cheapProducts = [];
    for (const product of array){
        if (product.price < 10) {
            cheapProducts.push(product.name)
        }
    }
    return cheapProducts;
}