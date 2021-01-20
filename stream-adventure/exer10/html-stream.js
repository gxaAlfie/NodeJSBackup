const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()

function uppercase(buffer, encoding, next) {
  const uppercaseText = `${buffer}`.toUpperCase()
  this.push(uppercaseText)
  next()
}

const loudStream = tr.createStream('.loud')

loudStream.pipe(through(uppercase)).pipe(loudStream)
process.stdin.pipe(tr).pipe(process.stdout)
