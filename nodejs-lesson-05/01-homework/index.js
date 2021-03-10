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
    // האובייקט עם המפתחות לעדכון
    //---;
    const bookToUpdate = request.body;

    // המספר היו אר אל
    //---;
    const updateById = +request.params.bookId;

    //למצוא את הספר במערך לפי איי די;
    //---;
    const bookFromArray = books.find(book => book.id === updateById);

    for (const key in bookToUpdate) {
        if (key in bookFromArray) {
            bookFromArray[key] = bookToUpdate[key];
        };
    };

    response.json(bookFromArray);
});


//DELETE /api/books/7 - delete book with id=7;
//---;
app.delete("/api/books/:bookId", (request, response) => {
    const deleteId = +request.params.bookId;
    const index = books.findIndex(b => b.id === deleteId);
    books.splice(index, 1);
    response.sendStatus(204);
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





// const demo = {name:"c++",author:"moishe"};
//     console.log(demo[name])
//     for(const key in demo){
//         //iteration - name; demo[key]
//         //iteration - author;
//         //demo[key] - access to the value;
//     }


/*
    ! iteration 1;
    const objFromClient = {
        "name": "JAVA",
        "author": "Ugi",
        "blabla": "Ugi",
    }
    const bookFromArray = { id: 1, name: "C++", author: "Moishe" };

    if (name in bookFromArray){
        bookFromArray[name] = objFromClient[name]
    }
*/

// for (const key in bookToUpdate) {
//     if (key in bookFromArray) {
//         bookFromArray[key] = bookToUpdate[key];
//     };
// };


// const person1 = { firstName: "Moishe" };
// const person2 = { firstName: "Kipi" };
// console.log(person1[firstName]) // "Mosihe"
// console.log(person2[firstName]) // "Kipi"

// // moishe = kipi;
// person1[firstName] = person2[firstName];