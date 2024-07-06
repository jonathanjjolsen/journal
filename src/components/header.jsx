import React from 'react';
import logo from '../../public/journal.svg';
import '../index.css';

const Header = () => {
    return (
        <header id='header'>
            <img id='logo' src={logo} alt="Logo" />
            <h1>My Journal</h1>
        </header>
    );
};

export default Header;
