import { differenceInDays } from 'date-fns'

function cuantoFalta(day, month){
  let birthday = new Date(new Date().getFullYear(), month - 1, day)
  let result = differenceInDays(birthday, new Date())
  return result > 0 ? console.log(`Faltan ${result} días para tu cumpleañsos.`):
    result < 0 ? console.log('Esa fecha ya pasó, te quedamos debiendo el regalito.'):
    console.log('¡¡¡Feliz Cumpleaños!!!')
}

console.log(cuantoFalta(27, 1))
