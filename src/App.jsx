import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/header';
import Home from './components/home';
import NewEntry from './components/newEntry';
import About from './components/about';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-entry" element={<NewEntry />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
