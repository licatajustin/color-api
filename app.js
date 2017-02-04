var express = require('express')
var favicon = require('serve-favicon')
var app = express()
var path = require('path')
var Utils = require('./utils.js')
var tinycolor = require('tinycolor2')

app.use(favicon(__dirname + '/public/favicon.ico'))
app.set('json spaces', 2)

app.get('/', function(_req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/:color', function(req, res) {
  var color = tinycolor(req.params.color)

  if (! color.isValid()) {
    res.send({
      error: 'Please provide a valid Hex.'
    })
  }

  res.json({
    color: color.toString(),
    lighten: Utils.lighten(tinycolor(req.params.color)),
    darken: Utils.darken(tinycolor(req.params.color))
  })
})

app.listen(3000, function() {
  console.log('Color API is listening on port 3000.')
})
