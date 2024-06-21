import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';

const EditBook = () => {
    //edit book from book detail page
    const {id} = useParams();
    const [book, setBook] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    // Fetch the data
    useEffect(() => {
        fetch(
            `http://localhost:5000/books/${id}`,{method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setBook(data);
                setTitle(data.title);
                setAuthor(data.author);
                setYear(data.year);
                setDescription(data.description);
            })
    }, []);
    const updateBook = () => {
        fetch(`http://localhost:5000/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author, year, description }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setShowSuccessMessage(true);
            });
    };
    return (
        <div>
            <h2>Edit Book</h2>
            {showSuccessMessage && <p>Book updated successfully!</p>}
            <form>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Author:
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </label>
                <label>
                    Year:
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />  
                </label>
            </form>
            <button onClick={updateBook}>Update</button>
            <Link to={`/details/${id}`}>Cancel</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default EditBook;