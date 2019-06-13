import React, {Component} from 'react';
import Header from './Header';

export default class App extends Component{
    navLinks = {
        Home: "index.html",
        Resume: "storage/resume-2019.pdf",
        Portfolio: "portfolio.html",
        GitHub: "https://github.com/mattConn/",
        LinkedIn: "https://www.linkedin.com/in/mattconndev/",
        Twitter: "https://twitter.com/mattconndev",
        Blog: "https://medium.com/@mattconndev"
    };

    render(){
        return (
            <div id="wrapper">
                <Header navLinks = {this.navLinks} />
            </div>
        );
    }
}