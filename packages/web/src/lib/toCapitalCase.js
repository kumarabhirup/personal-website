export default str =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    })
    .replace(/\s+/g, '')
