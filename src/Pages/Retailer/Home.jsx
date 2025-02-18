import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBarcode, FaListUl, FaHeart, FaTools, FaShoppingCart } from "react-icons/fa";
import "../../Css/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/home/banner-10010.webp"
import banner2 from "../../assets/home/banner-11294.jpeg"
import banner3 from "../../assets/home/honda-activa-5g-exterior-1.webp"
import banner4 from "../../assets/home/shine125_home_banner_dev_one.jpg"

function Home() {
    const features = [
        { icon: <FaSearch size={16}/>, label: "Model Search", path: "/model-search" },
        { icon: <FaBarcode size={16}/>, label: "VIN Search", path: "/vin-search" },
        { icon: <FaListUl size={16}/>, label: "Figure Search", path: "/figure-search" },
        { icon: <FaHeart size={16}/>, label: "Favorite", path: "/favorite" },
        { icon: <FaTools size={16}/>, label: "Accessories", path: "/accessories" },
        { icon: <FaShoppingCart size={16}/>, label: "Shop Products", path: "/shop-products" },
    ];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };
    return (
        <div className="home-container">
            {/* <h2>Explore Our Features</h2> */}
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <Link key={index} to={feature.path} className="feature-box">
                        {feature.icon}
                        <span>{feature.label}</span>
                    </Link>
                ))}
            </div>

            <div className="banner_crouser">
                <Slider {...sliderSettings} className="home-banner">
                    <div className="banner-slide">
                        <img src={banner1} alt="Slide 1" />
                    </div>
                    <div className="banner-slide">
                        <img src={banner2} alt="Slide 2" />
                    </div>
                    <div className="banner-slide">
                        <img src={banner3} alt="Slide 3" />
                    </div>
                    <div className="banner-slide">
                        <img src={banner4} alt="Slide 4" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Home;
