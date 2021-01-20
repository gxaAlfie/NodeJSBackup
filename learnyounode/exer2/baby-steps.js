// ARGV Indices: ['node', '/path/to/js-file.js', <arguments-added>]
// console.log(process.argv)

console.log(process.argv.slice(2).reduce((acc, numString) => ( acc + Number(numString)), 0))
