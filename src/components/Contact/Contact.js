import React from 'react';
import './Contact.scss';



const Contact = () => {
    return (
        <section class="ftco-appointment">
            <div class="overlay"></div>
            <div class="container-wrap">
                <div class="row no-gutters d-md-flex align-items-center">
                    <div class="col-md-6 d-flex align-self-stretch">
                        <div id="map" style={{width: '100%'}}>
                            <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Sunny%20dew%20+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/journey-planner.htm">Map Directions</a></iframe>
                        </div>
                    </div>
                    <div class="col-md-6 appointment ftco-animate">
                        <h3 class="mb-3">Contact Us</h3>
                        <form action="#" class="appointment-form">
                            <div class="d-md-flex">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div class="d-me-flex">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea name="" id="" cols="30" rows="3" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send" class="btn btn-primary py-3 px-4" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Contact;