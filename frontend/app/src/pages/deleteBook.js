import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';

const DeleteBook = () => {
    //delete book from book detail page
    const {id} = useParams();
    const [book, setBook] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // Fetch the data
    useEffect(() => {
        fetch(
            `http://localhost:5000/books/${id}`,{method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setBook(data);
            })
    }, []);
    const deleteBook = () => {
        fetch(`http://localhost:5000/books/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setShowSuccessMessage(true);
            });
    };
    return (
        <div>
            <h2>Delete Book</h2>
            {showSuccessMessage && <p>Book deleted successfully!</p>}
            <p>Are you sure you want to delete this book?</p>
            <ul>
                <li>Title: {book.title}</li>
                <li>Author: {book.author}</li>
                <li>Year: {book.year}</li>
                <li>Description: {book.description}</li>
            </ul>
            <button onClick={deleteBook}>Delete</button>
            <Link to={`/details/${id}`}>Cancel</Link>
            <Link to="/">Home</Link>
        </div>
    );

}

export default DeleteBook;