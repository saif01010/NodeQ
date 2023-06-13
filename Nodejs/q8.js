const http = require("http");
const customModule = require("./customModule.js")
http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World\n")

    res.write(`${customModule.myDateTime()}`)
    res.end()
} ).listen(5050)


