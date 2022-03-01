const { compareAsc, format } = require('date-fns') 

const formaDate = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

console.log(formaDate);