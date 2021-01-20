const [port, filePath] = process.argv.slice(2)
const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const readStream = fs.createReadStream(filePath)

  readStream.on('open', () => {
    readStream.pipe(response)
  })

  readStream.on('error', (error) => {
    response.end(error)
  })
})

server.listen(port)
