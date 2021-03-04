const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];

const express = require("express");
const bp = require('body-parser');
const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.get("/api/books", (request, response) => {
    response.json(books);
});
app.get("/", (request, response) => {
    response.json("Ihaaa");
});
app.get("/api/books/:id", (request, response) => {
    const id = +request.params.id;
    const book = books.find(book => book.id === id);
    response.json(book);
});
app.post("/api/books",(request, response) => {
    const id = books.length+1;
    const data = request.body;
    data.id = id;
    books.push(data);
    response.json(books);
});
app.put("/api/books/:id",(request, response) => {
    const id = +request.params.id;
    const data = request.body;
    books.forEach(book => {
        if(book.id === id){
            book.name = data.name;
            book.author = data.author;
            book.id = id;
        }
    });
    response.json(data);
})
app.listen(4000, () => console.log("listening on port 4000"));
