const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response) => {
  response.pipe(bl(function (err, data) {

    if (err) {
      return console.error(err);
    } else {
      console.log(data.length);
      console.log(data.toString());
    }
  }));
});