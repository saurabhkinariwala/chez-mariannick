import React, {Component} from 'react';


const Slider = ({align, subheading, heading, image, desc}) => {
    return(
        <div className="slider-wrapper">
            <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text align-items-center" data-scrollax-parent="true">
                        <div className="col-md-6 col-sm-12 ftco-animate">
                            <span className="subheading">{subheading}</span>
                            <h1 className="mb-4">{heading}</h1>
                            <p className="mb-4 mb-md-5">{desc}</p>
                            <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            {image && <img src={image} className="img-fluid" alt="" /> }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
} 

export default Slider;