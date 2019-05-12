import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ImageWithText from '../../components/ImageWithText/ImageWithText';


const About = () => {
    const heading = 'About Us';
    const subnav = 'about';
    return(
        <div className="about-page">
            <Banner heading = {heading} subnav={subnav}/>
            <ImageWithText/>
        </div>
    )
}

export default About;