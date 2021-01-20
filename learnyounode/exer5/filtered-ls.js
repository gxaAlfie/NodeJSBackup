'use strict'

const fs = require('fs')
const [directoryPath, fileExtension] = process.argv.slice(2)

fs.readdir(directoryPath, { encoding: 'utf8', withFileTypes: true }, (error, files) => {
  files.forEach((file) => {
    const { name } = file

    if (name.includes(`.${fileExtension}`)) {
      console.log(file.name)
    }
  })
})
