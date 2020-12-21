import React from 'react'
import Product from "./Product"
import './Proleyout.css';
import ProductSlider from "./ProductSlider"
function Proleyout() {
    return (
        <div className="home_rows">
            <div className="first_row">
            <Product
                id="1"
                photo="https://images-na.ssl-images-amazon.com/images/I/51CyZF2gKhL.jpg"
                title="MeRaYo 3 Compartment Metal Mesh Desk Organizer Stationery Pen Stand"
                price={335}
                rating={4}
            />
            <Product
                id="2"
                photo="https://images-na.ssl-images-amazon.com/images/I/715BJgeSWlL._SX679_.jpg"
                title="Featherlite Versa MB Office Chair with Arm (Black)"
                price={8999}
                rating={5}
                />
            <Product
                id="3"
                photo="https://m.media-amazon.com/images/I/81v8JAWL4OL._AC_UL320_.jpg"
                title='AmazonBasics Water Repellant Shower Curtain with Hooks - 72" x 72", Gray Stripe'
                price={599}
                rating={3}
            />
            </div> 
            <div className="product_row">
                <Product
                    id="4"
                    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9M1flatg1buYHPqAb6USibz9O-grdlgj6g&usqp=CAU"
                    title="adidas Men's Grand Court Sneaker"
                    price={2229}
                    rating={4}
                    />
                <Product
                    id="5"
                    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZHD21BdPueg5CeEQLNbd7xVzQA6MI5LgPQ&usqp=CAU"
                    title="Ray-Ban Rb3016 Clubmaster Square Sunglasses"
                    price={1200}
                    rating={2}
                />
            </div>
            <div className="product_row">
                <Product
                    id="6"
                    photo="http://www.marshall-usa.com/cameras/images/MarshallFamily.jpg"
                    title="HD Lifestyle Styling products Hair salon supplies Farmavit"
                    price={122229}
                    rating={5}
                    />
            </div>
            <div className="product_slider">
                <ProductSlider />
            </div>
        </div>
    )
}

export default Proleyout
