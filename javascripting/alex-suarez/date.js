//modulos ES
//import { compareAsc, format } from 'date-fns'

const {compareAsc, format}=require("date-fns")

const formatDate=format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'
console.log(formatDate)


const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
