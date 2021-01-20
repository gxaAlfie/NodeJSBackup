const http = require('http')
const port = process.argv[2]

function parseTime(query) {
  const date = new Date(query)
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return { hour, minute, second }
}

function unixTime(query) {
  const date = new Date(query)
  const unixtime = date.getTime()

  return { unixtime }
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    const urlField = new URL(request.url, 'http://example.com')
    const routesMap = {
      '/api/parsetime': parseTime,
      '/api/unixtime': unixTime
    }

    const callbackFunction = routesMap[urlField.pathname]

    if (callbackFunction) {
      const returnData = callbackFunction(urlField.searchParams.get('iso'))

      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(returnData))
    }

  }
})

server.listen(port)
