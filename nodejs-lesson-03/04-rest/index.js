/*
    rest with express;
    express 
    סיפריה חינמית קלה ומהירה שעוזרת לבנות שרת וואב בטכנית רסט
    https://www.npmjs.com/package/express
    מאד פופולארית ורוב שרתי וואב ברסט מפתחים בה ולא ישירות בנואד
    סיפריה שעוזרת לסדר את הקוד כשכותבים שרת רסט
    בעזרתה אנחנו מקבלים בקשות מקליינטים ומחזירים תשובה
    url מתאים לבין כתובת  method היא מתאמת בין 
    לאפליקציה שלנו rest api עוזרת לכתוב 

    אקספרס סיפריה שעוזרת להגדיר חלוקה לוגית של משאב 
    כשהיא משלבת ראוט ספציפי עם מטוד מסויים
    ובכך יוצרת חלוקות מסודרות של המשאבים באפליקציה
    כשמגיע בקשה לכתובת ספציפית עם מטוד ספציפי תופעל הלוגיה המתאימה עבור אותו המשאב

    GET /api/books
    GET /api/books/:bookId
    POST /api/books
 */
const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];

//Get an object representing the entire server;
//---;
const express = require("express");
const app = express();

const omrihappy = "Ihaaa";
app.get("/", (request, reponse) => {
    reponse.json(omrihappy);
});

//GET /api/books - get all books;
//---;
app.get("/api/books", (request, reponse) => {
    reponse.json(books);
});

//GET /api/books/2 - get one book with that id;
//---;
// return only the book with id 3;
app.get("/api/books/:bookId", (request, reponse) => {

    const id = +request.params.bookId;
    const result = books.find(book => book.id === id);
    console.log("result", result);

    /*
        json זו פונקציה שמחזירה תשובה לקליינט
        והתוכן שלה זה התוכן שחוזר לקליינט
     */
    reponse.json("YEYEYYYYYYYY");
});

app.listen(4000, () => console.log("listen on port 4000"));
