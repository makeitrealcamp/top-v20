const pets = ['cat', 'dog', 'rat'];
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i].concat('s');
}
console.log(pets);