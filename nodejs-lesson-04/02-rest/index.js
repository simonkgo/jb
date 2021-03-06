const books = [
    { "id": 1, "name": "C++", "author": "Moishe" },
    { "id": 2, "name": "JS", "author": "Kipi" },
    { "id": 3, "name": "PHP", "author": "Ugi" },
];
// {"id": 4, "name": "C sharp", "author": "lili"}
const express = require ("express");

const app = express()

app.use(express.json());

//GET all books//
app.get("/api/books", (request, response)=>{
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

//DELETE one books//
app.delete("/api/books/:bookId", (request, response)=>{
    const id = +request.params.bookId;

    let index = books.findIndex(myBook => myBook.id===id);

    books.splice(index,1);
    response.json(books);
});

//PATCH one books//
app.patch("/api/books/:bookId", (request, response)=>{
    const id = +request.params.bookId;
    let book = request.body;
    let index = books.findIndex(myBook => myBook.id===id);

    for (let key in books[index]){

        for (let key2 in book){
            if(key2===key){books[index][key] = book[key2]}
        }
    }
    response.json(books);
});


//listener//
app.listen("3000", () =>{
    console.log("server running at http://127.0.0.1:3000/")
});