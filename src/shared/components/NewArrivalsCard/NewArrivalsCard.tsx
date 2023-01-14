import React from "react";
import { MovieCardProps } from "../MovieCards/MovieCards";
import "./Arrivals.scss";

const NewArrivalsCard = (props: MovieCardProps) => {
  return (
    <div className="movie__envelope">
      <div className="headers">
        <p className="header__title">New Arrival</p>
        <div className="title__box">
          <p className="header__p">See more </p>
          <img
            className="img"
            src={require("../../../assets/images/seeMore.svg").default}
            alt="see more"
          />
        </div>
      </div>
      <div className="movie__info">
        <img
          src={require("../../../assets/images/chevronleft.svg").default}
          alt="chevron left"
        />
        <div className="card__Container">
          <div className="moviecard_box">
            {/* src should be the image from props */}
            <img
              src={require("../../../assets/images/Poster.svg").default}
              alt="movie img"
              className="movie__img"
            />
            {/* year from props */}
            <p className="year">USA 2002</p>
            {/* title from props */}
            <p className="movie__title">Stranger things</p>
            {/* rating from props */}
            <div className="rating">
              <img
                src={require("../../../assets/images/imdb.svg").default}
                alt="rating logo"
              />
              {/* rating over 100 */}
              <p className="rating__figure">99/100</p>
              {/* change  rotten value*/}
              <img
                src={require("../../../assets/images/tomatoes.svg").default}
                alt="rotten tomatoes"
                className="tomato_img"
              />
              <p className="tomatoes">97%</p>
            </div>
            {/* genre from props */}
            <p className="genre">Action, adventure, horror</p>
          </div>
        </div>
        <img
          src={require("../../../assets/images/chevronright.svg").default}
          alt="chevron right"
        />
      </div>
    </div>
  );
};

export default NewArrivalsCard;
