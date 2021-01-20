const concat = require('concat-stream')

function stringReverse(buffer) {
  const inputString = `${buffer}`
  console.log(inputString.split('').reverse().join(''))
}

const stream = concat(stringReverse)

process.stdin.pipe(stream)
