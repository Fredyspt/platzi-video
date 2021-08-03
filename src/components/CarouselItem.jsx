import React from "react";

import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/images/play-icon.png";
import plusIcon from "../assets/images/plus-icon.png";

const CarouselItem = () => (
  <div class="carousel-item">
    <img
      class="carousel-item__img"
      src="https://images.pexels.com/photos/4264048/pexels-photo-4264048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Coffee shop"
    />
    <div class="carousel-item__details">
      <div>
        <img src={playIcon} alt="" />
        <img src={plusIcon} alt="" />
      </div>
      <p class="carousel-item__details--title">Coffee shop</p>
      <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
