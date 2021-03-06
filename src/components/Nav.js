import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavLink extends Component {

    renderLink = (url, text, exitLink) => {
        if (exitLink)
            return <a className="nav-link" href={url} target="_blank">{text}</a>
        else
            return <Link className="nav-link" to={url}>{text}</Link>
    }

    render(){
        const {url, text, exitLink} = this.props;
        return (
            <li className="nav-item">
                {this.renderLink(url, text, exitLink)}
            </li>
        );
    }

}

function Nav({ navLinks }) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {
                        Object.keys(navLinks).map((key) =>
                            <NavLink url={navLinks[key].url} text={key} exitLink={navLinks[key].exitLink} key={`NavLink-${key}`} />
                        )
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;