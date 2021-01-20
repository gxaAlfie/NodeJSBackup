const http = require('http')
const url = process.argv[2]

http.get(url, (response) => {
  let data = []
  response.on('data', (output) => data.push(output))
  response.on('end', () => {
    const dataString = data.join('')
    console.log(dataString.length)
    console.log(dataString)
  })
}).on('error', console.error)
