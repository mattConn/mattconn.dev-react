import React from 'react';

const NotFound = ({location}) => {
    const pageName = location.pathname.replace('/','');
    return (
        <div>
            <h1>Page Not Found.</h1>
            <h3>Could not find <em>{pageName}</em>. I'm sorry!</h3>
        </div>
        );
}

export default NotFound;