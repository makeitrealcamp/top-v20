const fs = require('fs');
const path = require('path');

module.exports = function (dirName, dirExt, callback) {
  fs.readdir(dirName, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const filteredData = data.filter((file) => {
        return path.extname(file) === '.' + dirExt;
      });
      callback(null, filteredData);
    }
  });
};