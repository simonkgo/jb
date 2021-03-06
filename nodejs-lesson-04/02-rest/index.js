const { request, response } = require("express");
const express = require("express");

//Get an object representing the entire server;
//---;
const app = express();

//add ability to containt json inside the request/response body;
/*
    middleware נרחיב בנושא של 
    app.use - מאפשר לאקספרס לקבל פורמט גייסון בתוך הבודי
 */
app.use(express.json());

const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];


//GET /api/books - get all books;
//---;
app.get("/api/books", (request, response) => {
    response.json(books);
});

//GET /api/books/7 - get one book with that id;
//---;
app.get("/api/books/:bookId", (request, response) => {
    //ניקח את האידי שנשלח בפרמטרים של תופס הבקשה
    //---
    const bookId = +request.params.bookId;

    //נשמצא את הספר המתאים במערך הספרים 
    //---
    const book = books.find(b => b.id == bookId);

    //נחזיר תשובה כאובייקט גייסון לקליינט
    //---
    response.json(book);
});

//POST /api/books - add a new book;
//---;
app.post("/api/books", (request, response) => {
    //ניקח את המידע שנשלח בגוף הבקשה ונשמור במשתנה
    //---
    const newbook = request.body;

    //נוסיף איי די חדש לספר
    //---
    books.push(newbook);

    //נחזיר תשובה בפורמנט גייסון לקליינט
    //---
    response.json(books);
});


//PUT /api/books/7 - full update of book with id=7;
//---;


app.put("/api/books/:bookId", (request, response) => {
    const id = +request.params.bookId
    const book = request.body
    const index = books.findIndex(b => b.id === id)
    books[index] = book
    response.json(book)
})


app.delete("/api/books/:bookId", (request, response) => {
    const id = +request.params.bookId
    const index = books.findIndex(b => b.id === id)
    books.splice(index, 1)
    console.log(books);
    response.json(books);

})

app.patch("/api/books/:bookId", (request, response) => {
    const id = +request.params.bookId;
    const book = request.body;
    const index = books.findIndex(b => b.id === id)
    if (book.name) {
        books[index].name = book.name
    }
    if (book.author) {
        books[index].author = book.author
    }


    response.json(books)
})

app.listen("3000", () => console.log("Server listening on port 3000"));

