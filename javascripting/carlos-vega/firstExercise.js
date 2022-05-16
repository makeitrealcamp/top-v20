//print the first ingredient of the receipe.

const receipe = {
    name:"",
    ingredients: [
        { name:'pan', quantity:2 },
        { name:'jamon', quantity:1 },
        { name:'queso', quantity:1 },
    ]
}

console.log(receipe.ingredients[0].name);