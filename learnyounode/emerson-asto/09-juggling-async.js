const http = require('http');
const bl = require('bl');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data);

    http.get(url2, (response) => {
      response.pipe(bl((err, data) => {
        if (err) {
          return console.error(err);
        }
        data = data.toString();
        console.log(data);

        http.get(url3, (response) => {
          response.pipe(bl((err, data) => {
            if (err) {
              return console.error(err);
            }
            data = data.toString();
            console.log(data);
          }));
        });
      }));
    });
  }));
});