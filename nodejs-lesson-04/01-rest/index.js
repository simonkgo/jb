const express = require('express');

const app = express();

const books = require('./book/bookList');

app.use(express.json());

app.get('/api/books',(req,res) => {
    res.json(books);
});

app.get('/api/books/:id',(req,res) => {
    const found = books.find(book => book.id === parseInt(req.params.id));
    res.json(found);
});

app.post('/api/books',(req,res) => {
    const newBook = req.body;
    books.push(newBook)
    res.json(newBook)
});

app.put('/api/books/:id',(req,res) => {
    const found = books.findIndex(book => book.id === parseInt(req.params.id));
    const book = req.body;
    books[found] = book;
    res.json({massage:`The Book Is Updata` ,books});
});

app.delete('/api/books/:id',(req,res) => {
    const found = books.findIndex(book => book.id === parseInt(req.params.id));
    books.splice(found,1);
    res.json({massage: `The Book Is Deleted` ,books});
});

app.patch('/api/books/:id',(req,res) => {
        const update = req.body;
        books.forEach(book => {
            if(book.id === parseInt(req.params.id)){ 
                book.id = update.id ? update.id : book.id;
                book.name = update.name ? update.name : book.name;
                book.author = update.author ? update.author : book.author;
                res.json({massage: 'The book is update',books});
                
            };
        });
});

app.listen(3001,console.log('Running Server....'));