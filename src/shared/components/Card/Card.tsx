import React from "react";
import "./Card.scss";

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={`card ${props.className || ""}`}>
      {" "}
      <img
        className="card-image"
        src={require("../../../assets/images/movielogo.svg").default}
        alt="movie logo"
      />
      {props.children}
    </div>
  );
};

export default Card;
