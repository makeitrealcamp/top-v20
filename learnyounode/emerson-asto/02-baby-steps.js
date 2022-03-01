let element = 0;

for (let i = 2; i < process.argv.length; i++) {
  element += parseInt(process.argv[i]);
}

console.log(element);