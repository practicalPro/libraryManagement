// Feature (at least 5 different pages with different "routing"):
// Add Book
// Edit Book
// Delete Book
// View All Books List
// Display Book Details
// You can use mockup data in JSON format
// If you can, create backend using Node.js (Better) / Firebase
// Push the code to your PUBLIC github repository.


// Importing express module
const express = require('express');
const books = require('./books');



const app = express();
app.use('/books', books);
app.use(express.json());


//start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000...');
});
