const express = require("express");

const app = express();
app.use(express.json());


app.get("/api/books", (request, response) => {
    response.json(books);
});


app.get("/api/books/:bookId", (request, response) => {
    const id = +request.params.bookId;
    const book = books.find(b => b.id == id);
    response.json(book);
});


app.post("/api/books", (request, response) => {
   const book = request.body;
    book.id = books[books.length - 1].id + 1;
    books.push(book);
    response.status(201).json(book);
});


app.put("/api/books/:bookId", (request, response) => {
    const book = request.body;
    const id = +request.params.bookId;
    const index = books.findIndex(b => b.id == id);
    books[index] = book;
    response.json(book);
});

app.patch("/api/books/:bookId", (request, response) => {
    const bookToUpdata = request.body;

    const id = +request.params.bookId;
    const index = books.find(book => book.id === id);

    for(const key in bookToUpdata){
        if(key in index){
            index[key] = bookToUpdata[key];
        }
    }
    response.json(index)
});
// app.patch("/api/books/:bookId", (request, response) => {
//     const bookToUpdata = request.body;

//     const id = +request.params.bookId;
//     const index = books.findIndex(book => book.id === id);
//     const bookFromArray = books[index];

//     for(const key in bookToUpdata){
//         if(key in bookFromArray){
//             bookFromArray[key] = bookToUpdata[key];
//         }
//     }
//     response.json(bookFromArray)
// });


app.delete("/api/books/:bookId", (request, response) => {
    
});


app.listen(3001, () => console.log("Listening on port 3001..."));


const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];