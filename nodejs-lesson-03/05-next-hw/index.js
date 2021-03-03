const books = require('./books/bookList')
const express = require("express");
const { request } = require('http');
const { response } = require('express');
const app = express();

app.use(express.json());

app.get("/api/books", (request, reponse) => {
    reponse.json(books);
});

app.get("/api/books/:id", (request,response) => {
    const foundId = books.find(book => book.id === parseInt(request.params.id));

    if (!foundId) response.status(404).json ({msg:`the ${request.params.id} id you were looking for not found`})
    response.send(foundId);     
});

app.post("/api/books/", (request,response) => {
    const update = request.body;
    const book = {
        id: books.length + 1,
        name: update.name,
        author: update.author
    };

    books.push(book);
    response.json(books);
});

app.put("/api/books/", (request,response) => {
    newBookId = books.find(book => book.id === parseInt(request.params.id));

    if(newBookId){
        const update = request.body;
        books.forEach(book => {
            if(book.id === parseInt(req.params.id)){
                book.name = update.name ? update.name : book.name;
                book.author = update.author ? update.author : book.author;

                response.json({msg:`book is updated`, book});
            }
        });
    }else {
        response.status(404).json({msg:`${request.params.id} does not exist`});
    };
});

const port = process.env.PORT || 3000;
app.listen(port,(request, response) => {
    console.log(`listen on port ${port}`)
})