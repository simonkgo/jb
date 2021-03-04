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
