import React, {Component} from 'react';
import Header from './Header';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
            <div id="wrapper" className="container">
                <Header navLinks = {this.navLinks} />
            </div>
        );
    }
}