import React from 'react';

const renderLink = (url, text) =>  <li key={`navLink-${text}`}><a href={url}>{text}</a></li>;

function Nav(props){
    const {navLinks} = props;
    return (
    <nav>
        <ul>
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