const http = require('http')
const urls = process.argv.slice(2)

const promises = urls.map((url) => {
  return (
    new Promise((resolve, reject) => {
      let data = []

      http.get(url, (response) => {
        response.on('data', (output) => data.push(output))
        response.on('end', () => {
          const dataString = data.join('')
          resolve(dataString)
        })
      }).on('error', (error) => reject(error))
    })
  )
})

Promise.all(promises).then((data) => {
  data.forEach((datum) => { console.log(datum) })
})
