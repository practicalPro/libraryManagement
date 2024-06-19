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
    <Router>
        <div className='App'>

            <Routes>
                <Route path='/' exact component={showAll} />
                <Route path='/addBook' component={addBook} />
                <Route path='/editBook' component={editBook} />
                <Route path='/removeBook' component={removeBook} />
                <Route path='/showOne' component={showOne} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
