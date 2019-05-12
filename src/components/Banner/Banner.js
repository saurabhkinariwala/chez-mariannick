import React from 'react';

const Banner = ({heading, subnav}) => {
    return(
        <section className="home-slider owl-carousel img" style={{"backgroundImage": "url(images/bg_1.jpg)"}}>

        <div className="slider-item" style={{"backgroundImage": "url(images/bg_3.jpg)"}}>
            <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center">
  
              <div className="col-md-7 col-sm-12 text-center ftco-animate">
                  <h1 className="mb-3 mt-5 bread">{heading}</h1>
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>{subnav}</span></p>
              </div>
  
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner;