import React from "react";
import Slider from "react-slick";
import "./product.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../Assets/img/banner4.png";
import banner2 from "../../Assets/img/banner5.webp";
import banner3 from "../../Assets/img/banner6.webp";
import { Container } from "react-bootstrap";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    // prevArrow: ".prev-arrow",
    // nextArrow: ".next-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="product-slider">
      <Container>
        <Slider {...settings}>
          <div className="slider-img-box">
            <img src={banner1} alt="banner1" />
          </div>
          <div className="slider-img-box">
            <img src={banner2} alt="banner1" />
          </div>
          <div className="slider-img-box">
            <img src={banner3} alt="banner1" />
          </div>
          <div className="slider-img-box">
            <img src={banner1} alt="banner1" />
          </div>
          <div className="slider-img-box">
            <img src={banner2} alt="banner1" />
          </div>
          <div className="slider-img-box">
            <img src={banner3} alt="banner1" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}
