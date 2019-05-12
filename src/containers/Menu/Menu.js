import React, { Component } from 'react';
import FullMenu from '../../components/FullMenu/FullMenu';
import Banner from '../../components/Banner/Banner';


class Menu extends Component {
    render() {
        const heading = "Our Menu";
        const subnav = "Menu";
        return (
            <div className="menu-page">
                <Banner  heading = {heading} subnav={subnav} />
                <FullMenu/>
            </div>

        )
    }

}

export default Menu;