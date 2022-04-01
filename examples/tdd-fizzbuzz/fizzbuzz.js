function fizzBuzz(num) {
  const divisible = (divisor, num) => num % divisor === 0

  if(divisible(3, num) && divisible(5, num)) {
    return 'fizzbuzz'
  }

  if (divisible(3, num)) {
    return 'fizz'
  }

  if(divisible(5, num)) {
    return 'buzz'
  }

  return num
}

module.exports = fizzBuzz
