import React, {Component} from 'react';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// portfolio images
import charlieWebpage from '../../public/images/portfolio/charlie-webpage-tldr.png';
import casaApicii from '../../public/images/portfolio/casa-apicii.png';


import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

export default class App extends Component{
    navLinks = {
        About: {url: '/', exitLink: false},
        Resume: {url: '/resume', exitLink: false},
        Portfolio: {url: 'portfolio', exitLink: false},
        GitHub: {url: 'https://github.com/mattConn/', exitLink: true},
        LinkedIn: {url: 'https://www.linkedin.com/in/mattconndev/', exitLink: true},
        Twitter: {url: 'https://twitter.com/mattconndev', exitLink: true},
        Blog: {url: 'https://medium.com/@mattconndev', exitLink: true}
    };

    portfolioLinks = {
        charliewebpage: {image: charlieWebpage, title: 'Charlie Webpage "TL;DR"', copy: 'charlie copy'},
        Foo: {image: 'test image', title: 'test title', copy: 'test copy'},
        Bar: {image: 'test image', title: 'test title', copy: 'test copy'},
    };

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <Header navLinks = {this.navLinks} />
                        <Switch>
                            <Route path="/" exact component={About} />
                            <Route path="/resume" component={Resume} />
                            <Route path="/portfolio" component={()=><Portfolio portfolioLinks={this.portfolioLinks} />} />
                            <Route component={NotFound} />
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}