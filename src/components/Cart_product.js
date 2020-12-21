import React from 'react'
import "./Cart_product.css"
import {useStateValue} from "../StateProvider"
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Cart_product(id) {
    // console.log(id)
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id})
    };
    return (
        <div>
            {basket.map(item => {
                // console.log(item.id);
            return (<div className="addCart_View">
                    <img className="produt_image" src={item.photo} alt="product image" />
                    <div className="card_title_con">
                        <div className="cart_title_link"> <Link> <h3 className="product_title">{item.title}</h3></Link></div>
                        <div className="cart_product_price"><h3>{"₹" + item.price}</h3>
                            <div className="home_rating">
                                {[...Array(item.rating)].map(star => {
                                    return <Link><FaStar className="cart_product_star" style={{ fontSize: 22 }} /></Link>;
                                })}
                            </div>
                            <div className="cart_container">
                                    
                                <button onClick={RemoveFromCart} className="cart_button">Remove To Cart</button>
                            </div>
                        </div>

                    </div>
                </div>)
            })}
        </div>
    )
}

export default Cart_product
