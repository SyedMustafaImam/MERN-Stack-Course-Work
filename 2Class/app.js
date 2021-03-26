const http = require('http');

var dt = require('./myFirstModule');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write("\nTodays Date is :" + setInterval(() => {
        dt.GiveDate
    }, 1000));

    res.end("\nmustafa");
    console.log("we are using prot 8000");
}).listen(8000, () => {
    console.log("This server is working fine")
})