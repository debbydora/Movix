import React, { useEffect, useState } from "react";
import { handleScrollBar } from "../../utils";
import "./CastCards.scss";
export interface CastProps {
  Featuredcasts: [];
}

const CastCards = (props: CastProps) => {
  let castArray = props.Featuredcasts;
  const [castToDisplay, setCastToDisplay] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  useEffect(() => {
    setCastToDisplay(handleScrollBar(castArray, startIndex, endIndex));
  }, [startIndex, endIndex, castArray]);

  const handlePrev = (e: any) => {
    e.preventDefault();
    if (startIndex === 0) {
      setStartIndex(0);
      setEndIndex(4);
    } else {
      setStartIndex(startIndex - 4);
      setEndIndex(endIndex - 4);
    }
    setCastToDisplay(handleScrollBar(castArray, startIndex, endIndex));
  };

  const handleNext = () => {
    if (endIndex >= castArray.length) {
      setStartIndex(0);
      setEndIndex(4);
    } else {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 4);
    }
    setCastToDisplay(handleScrollBar(castArray, startIndex, endIndex));
  };

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
          onClick={handlePrev}
        />
        <div className="cast__container">
          {castToDisplay?.map((cast: { [key: string]: any }) => (
            <div className="cast__box" key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt="chevron left"
                className="cast__img"
              />
              <p className="cast__name">{cast.name}</p>
            </div>
          ))}
        </div>
        <img
          src={require("../../../assets/images/chevronright.svg").default}
          alt="chevron right"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default CastCards;
