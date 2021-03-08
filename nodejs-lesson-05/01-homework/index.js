const express = require("express");

const app = express();
app.use(express.json());

//GET /api/books - get all books;
//---;
app.get("/api/books", (request, response) => {
    response.json(books); // status 200
});

//GET /api/books/7 - get one book with that id;
//---;
app.get("/api/books/:bookId", (request, response) => {
    //ניקח את האידי שנשלח בפרמטרים של תופס הבקשה
    //---
    const id = +request.params.bookId;

    //נשמצא את הספר המתאים במערך הספרים 
    //---
    const book = books.find(b => b.id == id);

    //נחזיר תשובה כאובייקט גייסון לקליינט
    //---
    response.json(book);
});

//POST /api/books - add a new book;
//---;
app.post("/api/books", (request, response) => {
    // ניקח את המידע שנשלח שנשמר בגוף תופס הבקשה ונשמור במשתנה
    //---
    const book = request.body;

    //נוסיף איי די חדש לספר
    //---
    book.id = books[books.length - 1].id + 1;

    //נדחוף את הספר למערך הספרים
    //---
    books.push(book);

    //נחזיר תשובה בפורמנט גייסון לקליינט
    //---
    response.status(201).json(book);
});

//PUT /api/books/7 - full update of book with id=7;
//---;
app.put("/api/books/:bookId", (request, response) => {
    //ניקח את המידע שנשלח בגוף הבקשה ונשמור במשתנה
    //---
    const book = request.body;

    //נקח את הפרמטר שנשלח לנו בכתובת
    //---
    const id = +request.params.bookId;

    //נמצא את מספר האינדקס במערך
    //---
    const index = books.findIndex(b => b.id == id);

    //נשים במקום הספר שהיה שם את הספר החדש ששלפנו מגוף הבקשה
    //---
    books[index] = book;

    //נחזיר בפורמנט גייסון את הספר לקליינט
    //---
    response.json(book);
});

//PATCH /api/books/7 - partial update of book with id=7;
//---;
app.patch("/api/books/:bookId", (request, response) => {
   //...
});

//DELETE /api/books/7 - delete book with id=7;
//---;
app.delete("/api/books/:bookId", (request, response) => {
    //...
});

//Run the server;
//---;
app.listen(3001, () => console.log("Listening on port 3001..."));

// ---------------------------------------------------------

//"Database";
//---;
const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];