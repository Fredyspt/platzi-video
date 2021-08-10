import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setFavorite } from "../actions";

import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/images/play-icon.png";
import plusIcon from "../assets/images/plus-icon.png";

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
    });
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img src={playIcon} alt="" />
          <img src={plusIcon} alt="" onClick={handleSetFavorite} />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
