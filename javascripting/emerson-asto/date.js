const { compareAsc, format } = require('date-fns');

const formatDate = format(new Date(2022, 02, 25), 'yyyy-MM-dd');

console.log(formatDate);

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]

dates.sort(compareAsc)

console.log(dates);