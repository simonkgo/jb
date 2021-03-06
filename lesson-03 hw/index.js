const exspress = require('express');
const app = exspress();
const books = require('./book/bookList');

app.use(exspress.json());

app.get('/api/books',(req,res) => {
    res.json(books);
})

app.get('/api/books/:id',(req,res) => {
    const faundId = books.find(book => book.id === parseInt(req.params.id));

    if(!faundId) res.status(404).json({mssage:`No book with ${req.params.id} id`});
    res.send(faundId);
})

app.post('/api/books/',(req,res) => {
    const update = req.body;
    const book = {
        id:books.length + 1,
        name:update.name,
        author:update.author
    };
    books.push(book);
     res.json(books);
})

app.put('/api/books/:id',(req,res) => {
    const bookId = books.find(book => book.id === parseInt(req.params.id));

    if(bookId){
        const update = req.body;
        books.forEach(book => {
            if(book.id === parseInt(req.params.id)){
                book.name = update.name ? update.name : book.name;
                book.author = update.author ? update.author : book.author;

                res.json({massage: 'The book is update',book});
            }
        });
    }else{
    res.status(404).json({mssage:`No book with ${req.params.id} id`});
   };
});

const port = process.env.PORT || 3000;
app.listen(port,(req,res) => {
    console.log(`The server runing in port${port}`);
})