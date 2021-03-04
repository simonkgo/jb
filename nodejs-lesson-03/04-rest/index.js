const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];

const express = require('express');

const app = express();

app.get("/api/books",(request, response)=>{
    response.json(books);
});

app.get("/api/books/:bookId",(request, response)=>{
    const id = +request.params.bookId;
    const result = books.find(book => book.id ===id);
    // console.log("result", result)
    // response.json("ok");
    response.json(result);
});

app.get("/",(request, response)=>{
    response.end("ihaa");   
});

app.listen(4000, ()=>{
    console.log(`server running at http://127.0.0.1:4000/`);
});
