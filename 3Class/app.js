const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>This is some change</h1>')
})
app.route('/books').get((req, res) => { res.send("Welcome to the book section") })
app.listen(3000)
app.get('/student', (req, res) => { res.send("welome to the student section") })

app.post('/', (req, res) => { res.send("welome to the POST METHOD") })


// Route Parameters
// http://localhost:3000/students/4/books/45
app.get('/students/:studentid/books/:bookid', (req, res) => {
    res.send(req.params)
})

// Route Handlers
app.route('/books/mus').get((req, res, next) => {
    console.log("Welcome to the book Mus Route Handelers section This is the first route")
    next();   
},
(req, res) => {
    res.write("This is the Second route")

}
) 


