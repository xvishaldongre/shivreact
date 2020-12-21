import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStateValue} from "../StateProvider"

function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header" id="header_top">
            {/* logo */}
            <Link to="/" className="header_logo_img">
            <img className="header_logo" 
            src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
            alt=""/>
            </Link>
            {/* address */}
            <div className="header_address">
                <span>Hello</span>
                <div className="header_location">
                <LocationOnIcon className="header_locationIcon" style={{ fontSize: 23 }}/>
                <span>india</span>
                </div>
            </div>
            {/* serch bar */} 
            <div className="header_search">
            <input type="search" className="header_searchbar"></input>
            <SearchIcon style={{ fontSize: 32 }} className="header_searchIcon" />
            </div>
            {/* 3 link tab  */}
            <div className="header_nav">
                {/* 1th */}
                <Link to="" className="headder_link">
                    <div className="header_flag">
                            <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png" alt="flag " className="header_img"/>
                            <ArrowDropDownIcon fontSize="small" className="header_downArrow"/>                    
                    </div>
                </Link>
                {/* 2st*/}
                <Link to="/login" className="headder_link">
                    <div className="header_option">
                        <span className="header_firstOption">Hello, Sign in</span>
                        <span className="header_secondOption">Account<ArrowDropDownIcon fontSize="small" className="header_downArrow"/></span>
                    </div>
                </Link>
                {/* 3nd  */}
                <Link to="/order" className="headder_link">
                    <div className="header_option">
                    <span className="header_firstOption">Returns</span>
                    <span className="header_secondOption">& Orders</span>
                    </div>
                </Link>
                {/* cart */}
                <Link to="/cart">
                    <div className="headder_link cart_box">
                        <AddShoppingCartIcon style={{ fontSize: 35 }} className="header_cart" />
                        <span className="header_secondOption cartheader">Cart</span>
                        <span className="cart_number">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
