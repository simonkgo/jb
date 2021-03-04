const { request,response } = require("express");
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
app.put("/app/books/:bookId", (request, response) => {
    // נקח את הפרמטר שנשלח בכתובת
    // ---
    const id = +request.params.bookId;

    // נקח את מידע שנמצא בגוף הבקשה
    // ---
    const book = request.body;

    // נמצא אתהאינדקס במערך שבו נמצא
    // ---
    const index = books.findIndex(b=> b.id === id);

    // נשים את כל אובייקט הספר המעודכן במקום שבו היה המקור
    // ---
    books[index] = book;

    response.json(book);
});

app.patch("/api/books/:booksId", (response,request) => {
    response.json("hello from moishe")
})


app.listen("3000", () => console.log("Server listening on port 3000"));