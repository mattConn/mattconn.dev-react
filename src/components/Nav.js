import React from 'react';
import {Link} from 'react-router-dom';

const renderLink = (url, text) =>  (
    <li className="nav-item" key={`navLink-${text}`}>
        <Link className="nav-link" to={url}>{text}</Link>
    </li>
);

function Nav({navLinks}){
    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav">
        {
            Object.keys(navLinks).map((key)=>
                renderLink(navLinks[key],key)
            )
        }
        </ul>
    </nav>
    );
};

export default Nav;