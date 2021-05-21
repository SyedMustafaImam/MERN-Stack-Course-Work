const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const BookModel = require('./models/book.model')

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://mustafa:abc.123@cluster0.tslbx.mongodb.net/bookstore?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => { console.log('database connected ') }).catch((err) => { console.log('database error: ', err) })

// app.get("/", async (req, res) => {
//     const book = new BookModel({ title: "Test Title", isbn: "11111", pageCount: 112, shortDescription: "Test Desc" });
//     try {
//         await book.save();
//     } catch (err) {
//         console.log(err);
//     }
// });

app.post("/insert", async (req, res) => {
    const title = req.body.title;
    const isbn = req.body.isbn;
    const pageCount = req.body.pageCount;
    const shortDescription = req.body.shortDescription;

    const book = new BookModel({ title: title, isbn: isbn, pageCount: pageCount, shortDescription: shortDescription });
    try {
        await book.save();
        console.log('book added to db')
    } catch (err) {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    BookModel.find({}, (err, result) => {
        if (err) res.send(err);

        res.send(result);
    });
});

app.put("/update", async (req, res) => {
    const newtitle = req.body.newtitle;
    const id = req.body.id;

    try {
        await BookModel.findById(id, (err, updatedtitle) => {
            updatedtitle.title = newtitle;
            updatedtitle.save();
            res.send('Updated.')
        })
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await BookModel.findByIdAndRemove(id).exec();
    res.send('Deleted.');
    console.log('book deleted from db')
})
app.listen(3001, () => { console.log(`server is running at port ${3001}`) });