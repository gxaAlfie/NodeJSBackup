const fileFiltering = require('./mymodule.js')
const [directoryPath, fileExtension] = process.argv.slice(2)

function displayFiles(error, files) {
  if (error) throw error

  files.forEach((file) => {
    console.log(file)
  })
}

fileFiltering(directoryPath, fileExtension, displayFiles)
