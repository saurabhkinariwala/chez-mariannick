import React, {Component} from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ImageWithText from '../../components/ImageWithText/ImageWithText';
import Services from '../../components/Services/Services';
import FullMenu from '../../components/FullMenu/FullMenu';
import Contact from '../../components/Contact/Contact';

class Home extends Component{
    render(){
        return(
            <div className="home-page">
                <Carousel/>
                <ImageWithText/>
                <Services/>
                <FullMenu />
                <Contact/>
            </div>
        )
    }
}

export default Home;