const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.end(`<h1>welcome to the homepage</h1>`)
        return
    }
    if (req.url === '/about') {
        res.end(`<h1>Here is a short history...</h1>`)
        return
    }
   
    res.end(`
    <h1>Oops...</h1>
    <p>boop boop boop</p>
    <a href="/">back home</a>`
    )
    
    
})
console.log('listening...')
server.listen(8080)