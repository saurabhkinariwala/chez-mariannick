import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const Contact = () => {
    const heading = "Contact Us";
    const subnav = "COnatect";
    return(
        <div className="contact-page">
            <Banner heading={heading} subnav={subnav}/>
            <ContactInfo/>
        </div>
    )
}

export default Contact;