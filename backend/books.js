const express = require('express');
const cors = require('cors');
const router = express.Router();
router.use(cors());



//set up some mock data
let books = [
        {id: 1, title: 'book one', author: 'author one', year: 2020, description: "description one"},
        {id: 2, title: 'book two', author: 'author two', year: 2021, description: "description two"},
        {id: 3, title: 'book three', author: 'author three', year: 2022, description: "description three"},
    ] 

//get all books
router.get('/', (req, res) => {
    res.json(books);
    console.log("Requested Books")
});

//get book by id
router.get('/:id', (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('The book with the given ID was not found.');
    res.json(book);
    console.log("Requested Book", book.id)
});

//add book
router.post('/', express.json(), (req, res, next) => {
    const book = {id: books.length + 1}
    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;
    book.description = req.body.description;
    books.push(book);
    res.json(book);
  });


//update book
router.put('/:id', express.json(), (req, res, next) => {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('The book with the given ID was not found.');
    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;
    book.description = req.body.description;
    res.json(book);
  });

  //delete book
  router.delete('/:id', (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('The book with the given ID was not found.');
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.json(book);
  });



module.exports = router;