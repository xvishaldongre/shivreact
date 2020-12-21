import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Crouselimg.css";

function Carouselimg() {
    return (
    <div>
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
        alt="Third slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
        alt="Third slide"
        />

            </Carousel.Item>
            <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
        alt="Third slide"
        />
    </Carousel.Item>
            </Carousel>
            <div className="blur-fead"></div>
            </div>
    )
}

export default Carouselimg
