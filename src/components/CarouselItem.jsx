import React from "react";

import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/images/play-icon.png";
import plusIcon from "../assets/images/plus-icon.png";

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://images.pexels.com/photos/4264048/pexels-photo-4264048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Coffee shop"
    />
    <div className="carousel-item__details">
      <div>
        <img src={playIcon} alt="" />
        <img src={plusIcon} alt="" />
      </div>
      <p className="carousel-item__details--title">Coffee shop</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
