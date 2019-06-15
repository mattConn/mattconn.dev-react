import React from 'react';

const renderLink = (url, text) =>  (
    <li className="nav-item" key={`navLink-${text}`}>
        <a className="nav-link" href={url}>{text}</a>
    </li>
);

function Nav(props){
    const {navLinks} = props;
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