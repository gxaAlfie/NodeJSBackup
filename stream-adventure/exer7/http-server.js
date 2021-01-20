const http = require('http')
const through = require('through2')

const port = process.argv[2]

function uppercase(buffer, encoding, next) {
  const uppercaseText = `${buffer}`.toUpperCase()
  this.push(uppercaseText)
  next()
}

http.createServer((request, response) => {
  if (request.method == 'POST') {
    request.pipe(through(uppercase)).pipe(response)
  } else {
    response.end('Not a POST Request')
  }
}).listen(Number(port))


