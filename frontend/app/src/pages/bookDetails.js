import React, { useEffect, useState } from 'react';


import { Link, useParams } from 'react-router-dom';

//bookdetails with id
const BookDetails = (props) => {
    // Set up the state
    const [book, setBook] = useState({});
    const {id} = useParams();
    // Fetch the data
    useEffect(() => {
        fetch(
            `http://localhost:5000/books/${id}`,{method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setBook(data);
            })
    }, [props.id]);

    return (
        <div>
            <h2>Book Details</h2>
            <Link to="/">Back</Link>
            <ul>
                <li>Title: {book.title}</li>
                <li>Author: {book.author}</li>
                <li>Year: {book.year}</li>
                <li>Description: {book.description}</li>
            </ul>
        </div>
    );
}   

export default BookDetails;