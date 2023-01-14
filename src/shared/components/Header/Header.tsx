import React from "react";
import Button from "../Button/Button";
import "./Header.scss";
export interface HeaderProps {
  fullName?: string;
  movieName?: string;
  description?: string;
  onClick?: (e: any) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header__container">
      <div className="navbar">
        <div className="logo__container">
          <img
            src={require("../../../assets/images/tv.svg").default}
            alt="movie logo"
          />
          <p>Movix</p>
        </div>
        <div className="search__bar">
          <input type="search" placeholder="what do you want to watch" />
          <img
            src={require("../../../assets/images/search.svg").default}
            alt="search icon"
          />
        </div>
        <div className="menu">
          {/* <p>Hi {props.fullName}</p> */}
          <p>Hi, Debby dora</p>
          <div className="red__logo">
            <img
              src={require("../../../assets/images/dash.svg").default}
              alt="dash"
            />
          </div>
        </div>
      </div>
      <div className="description__box">
        <p className="movie__name">
          {/* {props.movieName} */}
          John wick: parabellum
        </p>
        <div className="rating">
          {/* change the image and rate value */}
          <img
            src={require("../../../assets/images/imdb.svg").default}
            alt="imdb"
          />
          <p className="rate__value">90/100</p>
          {/* change  rotten value*/}
          <img
            src={require("../../../assets/images/tomatoes.svg").default}
            alt="rotten tomatoes"
            className="tomato_img"
          />
          <p className="rotten__tomatoes">97%</p>
        </div>
        {/* <p className="description">{props.description}</p> */}
        <p className="description">
          Defines a grid template by referencing the names of the grid areas
          which are specified with the grid-area property. Repeating the name.
        </p>
        <Button
          type={"button"}
          className="button--red trailer"
          title={"watch trailer"}
          icon={require("../../../assets/images/trailer.svg").default}
        />
      </div>
      <div className="pagination__box">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>
  );
};

export default Header;
