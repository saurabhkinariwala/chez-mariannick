import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component{
    render(){
        // let isActive = this.context.router.route.location.pathname === this.props.to;
        let isActive = true;
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <span className="flaticon-pizza-1 mr-1"></span>Pizza<br/><small>Delicous</small></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </li>
                            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                                <Link to="/delivery" className="nav-link">Delivery</Link>
                            </li>
                            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;