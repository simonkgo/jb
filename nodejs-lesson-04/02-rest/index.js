const { request, response } = require("express");
const express = require ("express");
// Get an object representing the entire server;
const app = express();

//add ability containt json inside the request/response body;
/*
middlerware נרחיב בנשא
app.use - מאפשר לאקספרס לקבל פורמט גייסון בתוך הבודי
*/
app.use(express.json());

const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];

//GET /api/books - get all books
app.get("/api/books", (request,response) => {
    response.json(books);
});
//GET /api/books/:id - get one book with id
app.get("/api/books/:bookId", (request ,response) => {

    //ניקח את האידי שנשלח בפרמטרים של תופס הבקשה 
    //---
    console.log(request.params)
    const id = +request.params.bookId;

    //מוצא את הספר המתאים במערך הספרים
    const book = books.find(b => b.id == id);

    //נחזיר תשובה כאובייקט גייסון לקליינט

    response.json(book);
});

//POST /api/books - add new book
app.post("/api/books", (request, response) => {
const newBook = request.body;
books.push(newBook);
response.json(books);
})

app.put("/api/books/:bookId", (request, response) => {
   //ניקח את הפרמטר שנשלח בכתובת
   //---
    const id = +request.params.bookId;
    //ניקח את המידע שנמצא בגוף הבקשה
    //---
    const book = request.body;
    //נמצא את האינדקס במערך שבו היה המקור
    const index = books.findIndex(b => b.id == id);

    //נשים את כל האובייקט הספר המעודכן במקום בו היה המקור
    //--
    books[index] = book;
    response.json(book);
    
    })
    
    app.delete("/api/books/:bookId", (request,response) =>{
        const id = +request.params.bookId;
        const book = books.find(b => b.id == id);
        books.splice(book.id, 1);
        response.json(books)
    });

    app.patch("/api/books/:bookId", (request,response) =>{
        const id = +request.params.bookId;
        const book = request.body;
        const index = books.findIndex(b => b.id == id);
        books[index] = book;
        response.json(book)
    })

app.listen("3000", () => console.log("server is listening in port 3000"));