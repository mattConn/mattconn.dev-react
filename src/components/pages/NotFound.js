import React from 'react';
import Page from './Page';

export default class NotFound extends Page {
    expectedTitle = location.pathname.replace('/', '');
    title = `${this.expectedTitle} Not Found`;

    render() {
        return (
            <div>
                <h1>Page Not Found.</h1>
                <h3>Could not find <em>{this.expectedTitle}</em>. I'm sorry!</h3>
            </div>
        );
    }
}