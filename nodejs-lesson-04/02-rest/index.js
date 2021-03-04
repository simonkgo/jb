// npm i express
// יצירת השרת
// npm i nodemon
// השרת מאזין לשינויים בקוד ואין צורך להוריד ולהרים אותו מחדש nodemon בהרצת השרת בעזרת

const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // מתקין יכולת של אקספרס להכיל בתוך הבאדי תוכן מסוג ג'ייסון

app.get("/api/books", (request, response) => {
    response.json(books);
});

app.get("/api/books/:bookId", (request, response) => {
    const id = +request.params.bookId;
    const book = books.find(book=>book.id===id);
    response.json(book);
});

app.post("/api/books", (request, response)=>{
    const book = request.body;
    let newId = books.length + 1;
    const verifyId = ()=> {
        const isIdTaken = books.find(book=>book.id===newId);
        if(!isIdTaken) {
            return;
        };
        newId++;
        verifyId();
    }
    verifyId();
    book.id = newId;
    books.push(book);
    response.json(books);
});

app.put("/api/books/:bookId", (request, response)=>{
    const id = +request.params.bookId;
    const updatedInfo = request.body;
    const book = books.find(book => book.id === id);
    if (book === undefined) {
        response.json("This book does not exist");
    }
    books.forEach(book => {
        if(book.id === id){
            book.name = updatedInfo.name;
            book.author = updatedInfo.author;
        }
    });
    response.json(books);
})

app.delete("/api/books/:bookId", (request, response) => {
    const id = +request.params.bookId;
    const book = books.find(book => book.id === id);
    const indexToRemove = books.indexOf(book);
    books.splice(indexToRemove,1);
    response.json(books);
})

app.listen(port, () => {
    console.log(`listening on http://127.0.0.1:${port}/api/books`);
});
