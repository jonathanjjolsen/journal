import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/journal.svg';
import '../index.css';

const Header = () => {
    return (
        <header id='header'>
            <img id='logo' src={logo} alt="Logo" />
            <h1>My Journal</h1>
            <nav id='navUl'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new-entry">New Entry</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
