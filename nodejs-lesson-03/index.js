
const express = require('express');
const { get } = require('http');

const app = express();
app.use(express.json()); //without this line, the new object in POST is read as null

const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];


//homepage
app.get('/', (req, res) => {
    res.send('You are on the homepage.');
})


//get all books
app.get('/api/books', (req, res) => {
    res.json(books);
})


//get one book
app.get('/api/books/:bookId', (req,res) => {
  
    const resultBook = books.find(book => book.id === parseInt(req.params.bookId));
    if(!resultBook) res.status(404).send('ERROR 404. The book with the given ID number was not found!');
    res.json(resultBook);
})


//add new book
app.post('/api/books', (req, res) => {
    //validation
    if(!req.body.name && !req.body.author){
        //400 bad request
        res.status(400).send('Name and Author is required!');
        return;
    }

    const newBook = {
        id: books.length + 1,
        name: req.body.name,
        author: req.body.author
    }
    
    books.push(newBook);
    res.json(newBook);
});


//updte full book 1
app.put('/api/books/:bookId', (req,res) => {
    if(!req.body.name && !req.body.author){
        //400 bad request
        res.status(400).send('Name and Author is required!');
        return;
    }
    const updateBook = req.body;

    const index = books.findIndex(i => i.id === parseInt(req.params.bookId));
    if(!index) res.status(404).send('ERROR 404. The index number was not found!');

    books[index] = updateBook;
    res.send(updateBook);

})


//delete specific book
app.delete('/api/books/:bookId', (req,res) => {
    const resultBook = books.find(book => book.id === parseInt(req.params.bookId));
    if(!resultBook) res.status(404).send('ERROR 404. The book with the given ID number was not found!');

    const index = books.indexOf(resultBook);
    books.splice(index, 1);
    res.send(resultBook);
})


//partial update
app.patch('/api/books/:bookId', (req,res) => {
    const resultBook = books.find(book => book.id === parseInt(req.params.bookId));
    if(!resultBook) res.status(404).send('ERROR 404. The book with the given ID number was not found!');

    if(!req.body.name && !req.body.author){
        //400 bad request
        res.status(400).send('Name and Author is required!');
        return;
    }

    const { name, author } = req.body;
    if(name) {
        resultBook.name = name;
    }
    if(author){
        resultBook.author = author;
    }

    res.json(resultBook);

})

app.listen(3000, () => {
    console.log('Server started on port 3000..');
})