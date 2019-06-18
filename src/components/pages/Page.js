import React, {Component} from 'react';

// Base page class
export default class Page extends Component {
    titlePrefix = 'MattConn.dev';
    title = null;

    componentDidMount(){
        document.title = `${this.titlePrefix} | ${this.title}`;
    }
}