import React, {Component} from 'react';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import About from '../pages/About';
import Resume from '../pages/Resume';
import NotFound from '../pages/NotFound';

export default class App extends Component{
    navLinks = {
        Home: {url: '/', exitLink: false},
        Resume: {url: '/resume', exitLink: false},
        Portfolio: {url: 'portfolio', exitLink: false},
        GitHub: {url: 'https://github.com/mattConn/', exitLink: true},
        LinkedIn: {url: 'https://www.linkedin.com/in/mattconndev/', exitLink: true},
        Twitter: {url: 'https://twitter.com/mattconndev', exitLink: true},
        Blog: {url: 'https://medium.com/@mattconndev', exitLink: true}
    };

    render(){
        return (
            <div id="wrapper" className="container">
                <BrowserRouter>
                    <Header navLinks = {this.navLinks} />
                        <Switch>
                            <Route path="/" exact component={About} />
                            <Route path="/resume" component={Resume} />
                            <Route component={NotFound} />
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}