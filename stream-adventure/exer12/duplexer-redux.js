const duplexer2 = require('duplexer2')
const through = require('through2')

function objectMaker(buffer, encoding, next) {
  next()
}

function endObjectMaker(done) {
  done()
}

module.exports = (counter) => {
  return duplexer2(through(objectMaker, endObjectMaker), counter)
}
