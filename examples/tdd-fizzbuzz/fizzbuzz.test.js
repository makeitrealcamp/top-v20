const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  test('should print 1 if they receive 1', () => {
    // Arrange
    const expected = 1
    // Act
    const result = fizzBuzz(1)
    // Assert
    expect(result).toBe(expected)
  })

  test('should print fizz if they receive 3', () => {
    // Arrange
    const expected = 'fizz'
    // Act
    const result = fizzBuzz(3)
    // Assert
    expect(result).toBe(expected)
  })

  test('should print fizz if they receive a multiple of 3', () => {
    // Arrange
    const expected = 'fizz'
    // Act
    const result = fizzBuzz(6)
    // Assert
    expect(result).toBe(expected)
  })

  test('should print buzz if they receive 5', () => {
    // Arrange
    const expected = 'buzz'
    // Act
    const result = fizzBuzz(5)
    // Assert
    expect(result).toBe(expected)
  })

  test('should print buzz if they receive a multiple of 5', () => {
    // Arrange
    const expected = 'buzz'
    // Act
    const result = fizzBuzz(10)
    // Assert
    expect(result).toBe(expected)
  })

  test('should print fizzbuzz if they receive a multiple of 3 and 5', () => {
     // Arrange
     const expected = 'fizzbuzz'
     // Act
     const result = fizzBuzz(15)
     // Assert
     expect(result).toBe(expected)
  })
})
