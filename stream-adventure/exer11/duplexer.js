const duplexer2 = require('duplexer2')
const spawn = require('child_process').spawn

module.exports = function(cmd, args) {
  const spawnedProcessStream = spawn(cmd, args)
  return duplexer2(spawnedProcessStream.stdin, spawnedProcessStream.stdout)
}
