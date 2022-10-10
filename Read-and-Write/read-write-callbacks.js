const {readFile, writeFile} = require('fs')

console.log('Stating task...')
readFile('./content/subfolder/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile('./content/subfolder/resulttext.txt', `Here is the result:\n ${first} ${second}`
        , (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with task...')
        })
    })
})
console.log('Starting new task...')
module.exports