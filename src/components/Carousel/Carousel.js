import React, { Component } from 'react';
import Slider from "react-slick";
import Slide from "./Slide/Slide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss';



const Carousel = props => {

  const carouselContent = [{
    id: 1,
    align: 'left',
    subheading: 'Delicious',
    heading: 'Italian Cuizine',
    image: 'images/bg_1.png',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }, {
    id: 2,
    align: 'left',
    subheading: 'Crunchy',
    heading: 'Italian Pizza',
    image: 'images/bg_2.png',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }, {
    id: 3,
    align: 'center',
    subheading: 'Welcome',
    heading: 'We cooked your desired Pizza Recipe',
    image: 'images/bg_3.png',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  // const { carouselContent } = this.props;
  return (
    <div className="home-slider">
    <Slider {...settings}>
      {carouselContent.map((item, key) => (
          <Slide key={key} {...item} />
        ))}
   
      

    </Slider>
    </div>
  )
}

export default Carousel;