/* -------------------------------------------------------------------------- */
/*                              rest with express                             */
/* -------------------------------------------------------------------------- */

const books = [
  { id: 1, name: "C++", author: "Moishe" },
  { id: 2, name: "JS", author: "Kipi" },
  { id: 3, name: "PHP", author: "Ugi" },
];

const express = require("express");

const app = express();

app.listen(4000, () => {
  console.log("hi from 4000");
});

app.get("/", (request, response) => {
  response.json("Yey");
});

app.get("/api/books", (request, response) => {
  response.json(books);
});

app.get("/api/books/:bookID", (request, response) => {
  const id = +request.params.bookID;
  let result = books.find((book) => book.id === id);
  response.json(result);
});
