// MODULES ES
// import { compareAsc, format } from 'date-fns'

// COMMONJS
const { compareAsc, format } = require('date-fns')

const formatDate = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
console.log(formatDate)

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]

const sortedDates = dates.sort(compareAsc)
console.log("🚀 ~ file: date.js ~ line 17 ~ sortedDates", sortedDates)
