const fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
  if (err) {
    console.log(err);
  } else {
    const files = list.filter(file => file.match(new RegExp(process.argv[3])));
    files.forEach(file => {
      if (file.length > 2) {
        console.log(file);
      }
    });
  }
})