let books = require("./../controllers/books");

module.exports = function(app) {
  // app.get('/books', books.findAll);
  app.get("/api/books", books.index);
  app.post("/api/books", books.create);
  app.get("/api/books/:id", books.findById);
  app.put("/api/books/:id", books.update);
  app.delete("/api/books/:id", books.delete);
};
