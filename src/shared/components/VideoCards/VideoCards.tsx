import React from "react";
import "./VideoCards.scss";

export interface VideoProps {
  thumbnail?: string;
  title?: string;
}
const VideoCards = (props: VideoProps) => {
  return (
    <div className="video__envelope">
      <div className="headers">
        <p className="header__title">Exclusive videos</p>
        <div className="title__box">
          <p className="header__p">See more </p>
          <img
            className="img"
            src={require("../../../assets/images/seeMore.svg").default}
            alt="see more"
          />
        </div>
      </div>
      <div className="video__info">
        <img
          src={require("../../../assets/images/chevronleft.svg").default}
          alt="chevron left"
        />
        <div className="Video__card__Container">
          <div className="Videocard_box">
            {/* src should be the thumbnail from props */}
            <img
              src={require("../../../assets/images/Poster.svg").default}
              alt="movie img"
              className="video__img"
            />
            {/* title from props */}
            <p className="Video__title">Stranger things</p>
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

export default VideoCards;
