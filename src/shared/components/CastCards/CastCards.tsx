import React from "react";
import "./CastCards.scss";
export interface CastProps {
  img?: string;
  castName?: string;
}

const CastCards = (props: CastProps) => {
  return (
    <div className="Cast__envelope">
      <div className="headers">
        <p className="header__title">Featured casts</p>
        <div className="title__box">
          <p className="header__p">See more </p>
          <img
            className="img"
            src={require("../../../assets/images/seeMore.svg").default}
            alt="see more"
          />
        </div>
      </div>
      <div className="Cast__info">
        <img
          src={require("../../../assets/images/chevronleft.svg").default}
          alt="chevron left"
        />
        <div className="cast__container">
          <div className="cast__box">
            {/* img from props */}
            <img
              src={require("../../../assets/images/chevronleft.svg").default}
              alt="chevron left"
              className="cast__img"
            />
            {/* name from props */}
            <p className="cast__name">Keanu reeves</p>
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

export default CastCards;
