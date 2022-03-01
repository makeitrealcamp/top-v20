const fs = require('fs');

const data = fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
  }
});