// import logo from './logo.svg'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowAll from './pages/showAll';
import AddBook from './pages/addBook';
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';
import BookDetails from './pages/bookDetails';

function App() {
  return (
    //main page for different routes that redirect with buttons
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Book Management System</h1>
          <Routes>
            <Route path="/" element={<ShowAll />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit" element={<EditBook />} />
            <Route path="/delete/:id" element={<DeleteBook />} />
            <Route path="/details/:id" element={<BookDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App;
