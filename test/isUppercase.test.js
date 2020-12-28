const isUppercase = require('../src/isUppercase')

test('Should not run if no string provided', () => {
  expect(isUppercase()).toBe('Please provide a string')
})

test('Should not run if not a valid string', () => {
  expect(isUppercase(5)).toBe('Please provide a valid string')
})

test('Should return true', () => {
  expect(isUppercase('Samuel')).toBe(true)
})

test('Should return false', () => {
  expect(isUppercase('samuel')).toBe(false)
})
