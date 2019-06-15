import React from 'react';
import Nav from './Nav';

const Header = ({navLinks}) => (
    <header>
        <h1>Matthew Connelly</h1>
        <h2>Web Developer</h2>
        <Nav navLinks = {navLinks}/>
    </header>
);

export default Header;