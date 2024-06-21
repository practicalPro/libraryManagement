import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

//react js with inputs for adding a book and a button to add

const AddBook = () => {
    //allow input for title, author, year, and description
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    
    
    //return the form for adding a book
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const clearInputs = () => {
        setTitle('');
        setAuthor('');
        setYear('');
        setDescription('');
    };

    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author, year, description }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setShowSuccessMessage(true);
                clearInputs();
            });
    };

    return (
        <div>
            <h2>Add Book</h2>
            {showSuccessMessage && <p>Book added successfully!</p>}
            <form onSubmit={submit}>
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
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Back</Link>
        </div>
    );

}

export default AddBook;
