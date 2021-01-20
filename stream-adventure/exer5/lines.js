const through = require('through2')
let iteration = 1

function changeCase(buffer, encoding, next) {
  let recasedText = `${buffer}`.toLowerCase()

  if (iteration % 2 == 0) {
    recasedText = `${buffer}`.toUpperCase()
  }

  iteration += 1

  this.push(recasedText)
  next()
}

const stream = through(changeCase)
process.stdin.pipe(stream).pipe(process.stdout)
