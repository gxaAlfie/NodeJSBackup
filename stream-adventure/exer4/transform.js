const through = require('through2')

function uppercase(buffer, encoding, next) {
  const uppercaseText = `${buffer}`.toUpperCase()
  this.push(uppercaseText)
  next()
}

const stream = through(uppercase)
process.stdin.pipe(stream).pipe(process.stdout)
