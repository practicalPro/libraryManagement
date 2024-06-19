const express = require('express');
const router = express.Router();

//set up some mock data
let books = [
    {
        id: 1, title: 'book one', author: 'author one', year: 2020, description: "description one"},
        {id: 2, title: 'book two', author: 'author two', year: 2021, description: "description two"},
        {id: 3, title: 'book three', author: 'author three', year: 2022, description: "description three"},
    ] 

//get all books
router.get('/', (req, res) => {
    res.json(books);
});