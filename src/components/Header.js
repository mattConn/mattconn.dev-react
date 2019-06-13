import React from 'react';
import Nav from './Nav';

const Header = (props) => (
    <header>
        <h1>Matthew Connelly</h1>
        <h2>Web Developer</h2>
        <Nav navLinks = {props.navLinks}/>
    </header>
);

export default Header;