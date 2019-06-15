import React, {Component} from 'react';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import About from '../pages/About';
import NotFound from '../pages/NotFound';

export default class App extends Component{
    navLinks = {
        Home: "/",
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
                <BrowserRouter>
                    <Header navLinks = {this.navLinks} />
                        <Switch>
                            <Route path="/" exact component={About} />
                            <Route component={NotFound} />
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}