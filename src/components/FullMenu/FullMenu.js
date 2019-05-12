import React, { Component } from 'react';
import './FullMenu.scss';
import MenuAndPrice from '../MenuAndPrice/MenuAndPrice';


class FullMenu extends Component {
    state = {
        type: 'pizza',
    };
    selectItemHandler = (e, type) => {
        e.preventDefault();

        this.setState({
            type,
        })
    }
    render(){
        const {type} = this.state;

        return (
            <section className="ftco-menu">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2 className="mb-4">Our Menu Pricing</h2>
                            <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
                            <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="row d-md-flex">
                        <div className="col-lg-12 ftco-animate p-md-5">
                            <div className="row">
                                <div className="col-md-12 nav-link-wrap mb-5" style={{"textAlign" : "center"}}>
                                    <div className="nav ftco-animate nav-pills" style={{"display": "inline-block"}} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className={`nav-link ${type === 'pizza' ? 'active' : ''}`} id="v-pills-1-tab" onClick={(e) => this.selectItemHandler(e, 'pizza')} data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Pizza</a>
    
                                        <a className={`nav-link ${type === 'drinks' ? 'active' : ''}`} id="v-pills-2-tab" onClick={(e) => this.selectItemHandler(e, 'drinks')} data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>
    
                                        <a className={`nav-link ${type === 'burgers' ? 'active' : ''}`} id="v-pills-3-tab" onClick={(e) => this.selectItemHandler(e, 'burgers')} data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Burgers</a>
    
                                        <a className={`nav-link ${type === 'pasta' ? 'active' : ''}`} id="v-pills-4-tab" onClick={(e) => this.selectItemHandler(e, 'pasta')} data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Pasta</a>
                                    </div>
                                </div>
                                <MenuAndPrice type={type} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}


export default FullMenu;



// <div className="container">
// <div className="row justify-content-center mb-5 pb-3">
//     <div className="col-md-7 heading-section ftco-animate text-center">
//         <h2 className="mb-4">Hot Pizza Meals</h2>
//         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//     </div>
// </div>
// </div>
// <div className="container-wrap">
// <div className="row no-gutters d-flex">
//     {fullMenu.map((pizza, key) => {
//         return (
//             <div key={key} className="col-lg-4 d-flex ftco-animate">
//                 <div className="services-wrap d-flex">
//                     <a href="#" className="img" style={{ backgroundImage: "url(" + pizza.image + ")" }}></a>
//                     <div className="text p-4">
//                         <h3>{pizza.name}</h3>
//                         <p>{pizza.desc}</p>
//                         <p className="price"><span>{pizza.rate}</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
//                     </div>
//                 </div>
//             </div>

//         )
//     })}
// </div>
// </div>