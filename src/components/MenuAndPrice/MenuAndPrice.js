import React from 'react';
import './MenuAndPrice.scss';


const MenuAndPrice = ({ type }) => {

    const fullMenu = {
        'pizza': [{
            id: 1,
            name: 'Italian Pizza',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pizza-1.jpg'

        }, {
            id: 2,
            name: 'Greek Pizza',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pizza-2.jpg'

        }, {
            id: 3,
            name: 'Caucasian Pizza',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pizza-3.jpg'

        }, {
            id: 4,
            name: 'American Pizza',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pizza-4.jpg'

        }, {
            id: 5,
            name: 'Tomatoe Pie',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pizza-5.jpg'

        }, {
            id: 6,
            name: 'Margherita',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pizza-6.jpg'

        }],
        'drinks': [{
            id: 7,
            name: 'Lemonade Juice',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/drink-1.jpg'

        }, {
            id: 8,
            name: 'Pineapple Juice',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/drink-2.jpg'

        }, {
            id: 9,
            name: 'Soda Drinks',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/drink-3.jpg'

        }, {
            id: 10,
            name: 'Vergin Mojito',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/drink-4.jpg'

        }, {
            id: 11,
            name: 'Fruit Punch',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/drink-5.jpg'

        }, {
            id: 12,
            name: 'Blue Lagoon',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/drink-6.jpg'

        }],
        'burgers': [{
            id: 13,
            name: 'Aloo Patti',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/burger-1.jpg'

        }, {
            id: 14,
            name: 'Paneer Burger',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/burger-2.jpg'

        }, {
            id: 15,
            name: 'Chicken Burger',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/burger-3.jpg'

        }, {
            id: 16,
            name: 'Mutton Burger',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/burger-4.jpg'

        }, {
            id: 17,
            name: 'Fish Burger',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/burger-5.jpg'

        }, {
            id: 18,
            name: 'American Burger',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/burger-6.jpg'

        }],
        'pasta': [{
            id: 19,
            name: 'Alfredo Pasta',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pasta-1.jpg'

        }, {
            id: 20,
            name: 'Lassagne Pasta',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pasta-2.jpg'

        }, {
            id: 21,
            name: 'Chicken Pasta',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pasta-3.jpg'

        }, {
            id: 22,
            name: 'Mutton Pasta',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pasta-4.jpg'

        }, {
            id: 23,
            name: 'Fish Pasta',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pasta-5.jpg'

        }, {
            id: 24,
            name: 'Red Sauce Pasta',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            rate: '$2.90',
            image: 'images/pasta-6.jpg'

        }]
    }


    return (
        <section className="ftco-section" style={{ "margin": "0 auto" }}>
            <div className="container">
                <div className="row">
                    {fullMenu[type] && fullMenu[type].map((pizza, key) => (
                        <div className="col-md-6">
                            <div key={key} className="pricing-entry d-flex ftco-animate">
                                <div className="img" style={{ backgroundImage: "url(" + pizza.image + ")" }}></div>
                                <div className="desc pl-3">
                                    <div className="d-flex text align-items-center">
                                        <h3><span>{pizza.name}</span></h3>
                                        <span className="price">{pizza.rate}</span>
                                    </div>
                                    <div className="d-block">
                                        <p>{pizza.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default MenuAndPrice;