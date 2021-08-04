import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";
const API = 'http://localhost:3000/initalState'

const App = () => {
  const [ videos, setVideos ] = useState([]);
  
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
  }, []);
  
  console.log(videos);

  return (
    <React.Fragment>
      <Header />
      <Search />

      <Categories title="My list">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Featured">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Recently added">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </React.Fragment>
  );
};

export default App;
