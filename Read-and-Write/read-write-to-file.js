// reading and writing to file with destructuring
const {readFileSync, writeFileSync} = require('fs')
console.log('start task')
const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/test.txt', 'utf8')
const writeToFirst = writeFileSync('./content/subfolder/third.txt', `This is the two files(text) combined: \n${first} and ${second}`)
const third = readFileSync('./content/subfolder/third.txt', 'utf8')

console.log('ending task...')
console.log('starting new task...')
console.log(third)
module.exports 