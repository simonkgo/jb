const books = [
    { "id": 1, "name": "C++", "author": "Moishe" },
    { "id": 2, "name": "JS", "author": "Kipi" },
    { "id": 3, "name": "PHP", "author": "Ugi" },
];

const express = require ("express");

const app = express()

app.use(express.json());

//GET all books//
app.get("/api/books", (request, response)=>{
    // let another = { "id": 4, "name": "C`", "author": "lili"};
    response.json(books);  

});

//GET one books//
app.get("/api/books/:bookId", (request, response)=>{
    const id = +request.params.bookId;   //the 'id' takes the thing that would be put in the url
    let book = books.find(myBook => myBook.id===id);
    response.json(book);
});

//POST one books//
app.post("/api/books", (request, response)=>{
    const newBook = request.body;
    // response.json(newBook);
    books.push(newBook);
    response.json(books);
});

//PUT one books//
app.put("/api/books/:bookId", (request, response)=>{
    const id = +request.params.bookId;

    let book = request.body;

    let index = books.findIndex(myBook => myBook.id===id);

    books[index] = book;
    
    response.json(books);
});

// {"id": 4, "name": "C sharp", "author": "lili"}

//listener//
app.listen("3000", () =>{
    console.log("server running at http://127.0.0.1:3000/")
});