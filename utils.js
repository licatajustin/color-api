var percentages = [5, 10, 15, 20, 25]

function apply(operation, color) {
  return percentages.reduce(function(values, percentage) {
    values[String(percentage) + '%'] = color[operation](percentage).toString()
    return values
  }, {})
}

function lighten(color) {
  return apply('lighten', color)
}

function darken(color) {
  return apply('darken', color)
}

module.exports = {
  lighten: lighten,
  darken: darken
}
