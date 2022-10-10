const path = require('path');

// prints seperater (e.g., /)
console.log(path.sep)

// sets the path of file
const filePath = path.join('/content', 'subfolder', 'test.txt')
// show only file in path
const base = path.basename(filePath)
// shows the whole path related to file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)
console.log(base)
console.log(filePath)