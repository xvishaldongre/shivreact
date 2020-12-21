import React from 'react'
import "./Product.css"
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom"
import {useStateValue} from "../StateProvider"

function Product({ id, photo, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToCart = () => {
        // ?add atime
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                photo: photo,
                price: price,
                rating: rating
            }
        });
    }
    return (
        <div className="product">
            <div className="title_container">
            <h2><Link>{title}</Link></h2></div>
            <p className="product_price"><strong>₹</strong><small>{price}</small>
            </p>
            <div className="home_rating">
            {[...Array(rating)].map( star=>{
              return  <Link><FaStar className="product_star" style={{ fontSize: 22 }}/></Link>;
            })}
            </div>
            <br />
            <div className="img_container">
                <img src={photo} alt="" className="home_product_img" />
                </div><br />
            <div className="cart_container">
                <button onClick={addToCart} className="cart_button">Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
