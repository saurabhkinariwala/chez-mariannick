import React from 'react';
import './Services.scss';

const Services = () => {
    const servicesList = [{
        id: 1,
        icon: 'flaticon-diet',
        heading: 'Healthy Foods',
        desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
        id: 2,
        icon: 'flaticon-bicycle',
        heading: 'Fastest Delivery',
        desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    }, {
        id: 3,
        icon: 'flaticon-pizza-1',
        heading: 'Original Recipes',
        desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    }]
    return (
        <section className="ftco-section ftco-services">
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Our Services</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="row">
                    {servicesList.map((service, key) => {
                        return (
                            <div key={key} className="col-md-4 ftco-animate">
                                <div className="media d-block text-center block-6 services">
                                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                                        <span className={service.icon}></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">{service.heading}</h3>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;