const mymodule = require('./06-mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((file) => {
      console.log(file);
    });
  }
})