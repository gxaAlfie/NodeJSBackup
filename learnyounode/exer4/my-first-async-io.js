'use strict'

const fs = require('fs')
const testFilePath = process.argv[2]

fs.readFile(testFilePath, 'utf8', (error, data) => {
  if (error) throw err;
  console.log(data.split('\n').length - 1)
})
