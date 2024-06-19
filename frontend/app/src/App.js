// import logo from './logo.svg'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import addBook from './pages/addBook';
import editBook from './pages/editBook';
import removeBook from './pages/removeBook';
import showAll from './pages/showAll'
import showOne from './pages/showOne'

function App() {
  return (
    //main page for different routes
    <Router>
      <Routes>
        <Route path="/" element={<showAll />} />
        <Route path="/add" element={<addBook />} />
        <Route path="/edit/:id" element={<editBook />} />
        <Route path="/remove/:id" element={<removeBook />} />
        <Route path="/show/:id" element={<showOne />} />
      </Routes> 
    </Router>
  )
}

export default App;
