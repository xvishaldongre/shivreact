import React from 'react'
import "./Cart.css"
import {useStateValue} from "../StateProvider"
import ProductSlider from "./ProductSlider"
import Cart_product from "./Cart_product"

function Cart() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout_container">
            <div className="cart_ad">
                
            </div>
            {basket?.length === 0 ? (
                <div className="shopping_cart_empty">
                <h2 className="shopping_text">Shopping Cart is empty</h2>
                    <hr />
            </div>
            ) : (
                    <div>
            <div className="totle_sopping_cart">

            </div>
            <div className="shopping_cart">
                <h2 className="shopping_text">Shopping Cart</h2>
                            <hr />
                            {basket?.map((item) => {
                                // console.log(item.id)
                                return (
                                    <Cart_product
                                        id={item.id} />
                                )
                            })}
                <hr/>
            </div>
                </div>
            )}
            <div className="product_slider">
                <ProductSlider />
            </div>
        </div>
    )
}

export default Cart
