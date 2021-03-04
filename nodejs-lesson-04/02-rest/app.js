const { request, response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const books = [
  { id: 1, name: "C++", author: "Moishe" },
  { id: 2, name: "JS", author: "Kipi" },
  { id: 3, name: "PHP", author: "Ugi" },
  { id: 4, name: "TS", author: "Mikel" },
];

app.get("/api/books", (request, response) => {
  response.json(books);
});

app.listen("3000", () => {
  console.log("server listening on port 3000");
});

app.get("/api/books/:id", (request, response) => {
  const id = +request.params.id;
  let book = books.find((item) => item.id === id);
  response.json(book);
});

app.post("/api/books", (request, response) => {
  const newBook = request.body;
  console.log(newBook);
  books.push(newBook);
  response.json(books);
});

app.put("/api/books/:bookId", (request, response) => {
  const bookID = +request.params.bookId;
  const book = request.body;
  const index = books.findIndex((item) => item.id === bookID);
  books[index] = book;
  response.json(book);
});

app.delete("/api/books/:bookToDelete", (request, response) => {
  const bookToDelete = +request.params.bookToDelete;
  const book = request.body;
  const index = books.findIndex((item) => item.id === bookToDelete);
  books.splice(index, 1);
  response.json(books);
});

app.patch("/api/books/7",(request,response)=>{
response.json("yolo")
})