// Importing express module
const express = require('express')
const books = require('./books');



const app = express();
app.use('/books', books);
app.use(express.json());

// let books = [
//     {id: 1, title: 'book one', author: 'author one', year: 2020, description: "description one"},
//     {id: 2, title: 'book two', author: 'author two', year: 2021, description: "description two"},
//     {id: 3, title: 'book three', author: 'author three', year: 2022, description: "description three"},
// ] 

// app.get('/books', (req, res) => {
//     res.json(books);
//     console.log("Requested Books")
// });

// //get book by id
// app.get('/books/:id', (req, res) => {
//     const book = books.find(book => book.id === parseInt(req.params.id));
//     if (!book) return res.status(404).send('The book with the given ID was not found.');
//     res.json(book);
// });

// //add book
// app.post('/books', express.json(), (req, res, next) => {
//     const book = {id: books.length + 1}
//     book.title = req.body.title;
//     book.author = req.body.author;
//     book.year = req.body.year;
//     book.description = req.body.description;
//     books.push(book);
//     res.json(book);
//   });


// //update book
// app.put('/books/:id', express.json(), (req, res, next) => {
//     const book = books.find(book => book.id === parseInt(req.params.id));
//     if (!book) return res.status(404).send('The book with the given ID was not found.');
//     book.title = req.body.title;
//     book.author = req.body.author;
//     book.year = req.body.year;
//     book.description = req.body.description;
//     res.json(book);
//   });

//   //delete book
//   app.delete('/books/:id', (req, res) => {
//     const book = books.find(book => book.id === parseInt(req.params.id));
//     if (!book) return res.status(404).send('The book with the given ID was not found.');
//     const index = books.indexOf(book);
//     books.splice(index, 1);
//     res.json(book);
//   });

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
