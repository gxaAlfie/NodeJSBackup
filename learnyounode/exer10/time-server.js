const net = require('net')
const port = process.argv[2]

function zeroPaddedNumber(number) {
  return `${number}`.padStart(2, '0')
}

const server = net.createServer(function (socket) {
  const date = new Date()
  const year = date.getFullYear()
  const month = zeroPaddedNumber(date.getMonth() + 1)
  const day = zeroPaddedNumber(date.getDate())
  const hours = zeroPaddedNumber(date.getHours())
  const minutes = zeroPaddedNumber(date.getMinutes())

  socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`)
})

server.listen(port)
