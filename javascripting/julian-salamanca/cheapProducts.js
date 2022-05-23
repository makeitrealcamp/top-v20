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

  function cheapProducts(arr){
    let arreglo = [];
    
    for(let i = 0;i<arr.length;i++){
        if(arr[i].price<10){
            arreglo.push(arr[i].name);
        }
    }

    return arreglo;
  }

  console.log(cheapProducts(products1));