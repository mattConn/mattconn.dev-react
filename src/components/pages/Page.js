import React, {Component} from 'react';

// Base page class
export default class Page extends Component {
    title = null;

    componentDidMount(){
        document.title = this.title;
    }
}