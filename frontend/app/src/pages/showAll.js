import React, { useEffect, useState } from 'react';

// Import the necessary modules

import { Link } from 'react-router-dom';

const ShowAll = () => {
    // Set up the state
    const [books, setBooks] = useState([]);


    // Fetch the data
    useEffect(() => {
        fetch(
            'http://localhost:5000/books',{method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
    }, []);

    return (
        <div>
            <h2>Books</h2>
            <Link to="/add">Add Book</Link>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/details/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowAll;