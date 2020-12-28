function isUppercase(s) {
  if (!s) return 'Please provide a string'
  if (typeof s !== 'string') return 'Please provide a valid string'
  const firstLetter = s.charAt(0)

  return firstLetter === firstLetter.toUpperCase()
}

module.exports = isUppercase
