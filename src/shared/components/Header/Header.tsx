import Button from "../Button/Button";
import "./Header.scss";

export interface HeaderProps {
  fullName?: string;
  movieName?: string;
  description?: string;
  onClick?: (e: any) => void;
  imageIndex: number;
  getRandomImgs: Array<any>;
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = (props: HeaderProps) => {
  let backgroundImg =
    "https://image.tmdb.org/t/p/original" +
    props.getRandomImgs[props.imageIndex]?.poster_path;
  return (
    <div
      className="header__container"
      style={{
        backgroundImage: "url(" + backgroundImg + ")",
      }}
    >
      <div className="navbar">
        <div className="logo__container">
          <img
            src={require("../../../assets/images/tv.svg").default}
            alt="movie logo"
          />
          <p>Movix</p>
        </div>
        <div className="search__bar">
          <input
            type="search"
            placeholder="what do you want to watch"
            name="query"
            value={props.query}
            onChange={props.onQueryChange}
          />
          <img
            src={require("../../../assets/images/search.svg").default}
            alt="search icon"
          />
        </div>
        <div className="menu">
          {props?.fullName ? <p>Hi, {props?.fullName}</p> : ""}
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
          {props.getRandomImgs[props.imageIndex]?.title}
        </p>
        <div className="rating">
          <img
            src={require("../../../assets/images/imdb.svg").default}
            alt="imdb"
          />
          <p className="rate__value">
            {props.getRandomImgs[props.imageIndex]?.vote_average * 10}/100
          </p>
          <img
            src={require("../../../assets/images/tomatoes.svg").default}
            alt="rotten tomatoes"
            className="tomato_img"
          />
          <p className="rotten__tomatoes">
            {(
              (props.getRandomImgs[props.imageIndex]?.vote_average / 10) *
              100
            ).toFixed(0)}
            %
          </p>
        </div>
        <p className="description">
          {props.getRandomImgs[props.imageIndex]?.overview.substring(0, 200)}...
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
