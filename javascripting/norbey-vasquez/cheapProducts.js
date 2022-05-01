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
  
function cheapProducts(products) {
    var newArray=[]
    products.forEach(element => {
        if (element.price<10){
            newArray.push(element.name);    
        }
    });
    return newArray;
}

  console.log(cheapProducts(products1)); // ['panela', 'eggs'] 
  console.log(cheapProducts(products2)); // []