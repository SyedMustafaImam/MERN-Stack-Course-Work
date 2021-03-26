var express = require('express');
var pagesRoute = require('./students_route') 
var booksRoute = require('./books_route')
var app= express();


app.route('/books')



app.use('/Students', pagesRoute)

app.use('/books', booksRoute)

app.listen(3000, ()=>{console.log("Server is runnig at 3000")})