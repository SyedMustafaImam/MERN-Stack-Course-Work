const http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type':'text/plain'})
res.end("mustafa");
console.log("we are using prot 8000");
}).listen(8000, ()=>{
    console.log("This server is working fine")
})