'use strict'

const fs = require('fs')
const testFilePath = process.argv[2]

console.log(fs.readFileSync(testFilePath, 'utf8').split('\n').length - 1)
