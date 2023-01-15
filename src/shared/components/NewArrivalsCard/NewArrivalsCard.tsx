import React, { useEffect, useState } from "react";
import { handleScrollBar } from "../../utils";
import { MovieCardProps } from "../MovieCards/MovieCards";
import "./Arrivals.scss";

const NewArrivalsCard = (props: MovieCardProps) => {
  let moviesArray = props.movies;
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  useEffect(() => {
    setMoviesToDisplay(handleScrollBar(moviesArray, startIndex, endIndex));
  }, [startIndex, endIndex, moviesArray]);

  const handlePrev = (e: any) => {
    e.preventDefault();
    if (startIndex === 0) {
      setStartIndex(0);
      setEndIndex(4);
    } else {
      setStartIndex(startIndex - 4);
      setEndIndex(endIndex - 4);
    }
    setMoviesToDisplay(handleScrollBar(moviesArray, startIndex, endIndex));
  };

  const handleNext = () => {
    if (endIndex >= moviesArray.length) {
      setStartIndex(0);
      setEndIndex(4);
    } else {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 4);
    }
    setMoviesToDisplay(handleScrollBar(moviesArray, startIndex, endIndex));
  };
  const displayGenre = (genreIds: []) => {
    var genreNames = " ";
    genreIds?.forEach((element: number) => {
      genreNames =
        genreNames +
        props.genre.find((jerry) => jerry.id === element)?.name +
        ", ";
    });
    return genreNames;
  };
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
          onClick={handlePrev}
        />
        <div className="card__Container">
          {moviesToDisplay?.map((m: { [key: string]: any }) => (
            <div className="moviecard_box" key={m.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                alt="movie img"
                className="movie__img"
              />
              <p className="year">{new Date(m.release_date).getFullYear()}</p>
              <p className="movie__title">{m.title}</p>
              <div className="rating">
                <img
                  src={require("../../../assets/images/imdb.svg").default}
                  alt="rating logo"
                />
                <p className="rating__figure">{m.vote_average * 10}/100</p>
                <img
                  src={require("../../../assets/images/tomatoes.svg").default}
                  alt="rotten tomatoes"
                  className="tomato_img"
                />
                <p className="tomatoes">{(m.vote_average / 10) * 100}%</p>
              </div>
              <p className="genre">{displayGenre(m.genre_ids)}</p>
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

export default NewArrivalsCard;
