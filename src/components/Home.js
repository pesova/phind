import React, { Component } from 'react'
import Card from './Cards/Card'
import image1 from "../assets/images/img3.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img1.jpg";

const homeTitleStyle = { textAlign: "center", margin: "auto", lineHeight: "24px", padding: "0 20px", maxWidth: "425px", margin: "10px auto 40px", width: "100%", fontSize: "20px", color: "#2A2A33" }
export default class Home extends Component {
    state = {
        cards: [
            {
                id: 1,
                title: 'Buy Property',
                description: 'No matter what path you take to buy a property, we can help you navigate a successful sale. ',
                image: image1,
                link: '/buy'
            },
            {
                id: 2,
                title: 'Sell Property',
                description: 'No matter what path you take to sell your property, we can help you navigate a successful sale.',
                image: image2,
                link: '/sell'
            },
            {
                id: 3,
                title: 'Rent A Home',
                description: 'We are creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
                image: image3,
                link: 'rent'
            },

        ]
    }

    
    render() {
        return (
            <section className='card_section'>
                <h2 style={homeTitleStyle} >Whether you’re buying, selling or renting, we can help you move forward.</h2>
                {/* build three flex cards */}
                <div className='flex_cards'>
                    {this.state.cards.map((card) => (
                        <Card key={card.id} data={card} />
                    ))}

                </div>

            </section>
        )
    }
}
