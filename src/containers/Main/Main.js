import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Delivery from '../Delivery/Delivery';
import ContactUs from '../ContactUs/ContactUs';
import About from '../About/About';
import Footer from '../../components/Footer/Footer';



const Main = (props) => {
    return(
        <div className="main-view">
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/delivery" exact component={Delivery} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/about" exact component={About} />
            <Footer/>
        </div>
        


    )
}

export default Main;