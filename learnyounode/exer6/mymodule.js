const fs = require('fs')

module.exports = function (directoryPath, fileExtension, callback) {
  fs.readdir(directoryPath, (error, files) => {
    if (error) return callback(error)

    files = files.filter((file) => (file.includes(`.${fileExtension}`)))

    callback(null, files)
  })
}
