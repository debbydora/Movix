import React from "react";
import CastCards from "../../shared/components/CastCards/CastCards";
import Footer from "../../shared/components/Footer/Footer";
import Header from "../../shared/components/Header/Header";
import MovieCards from "../../shared/components/MovieCards/MovieCards";
import NewArrivalsCard from "../../shared/components/NewArrivalsCard/NewArrivalsCard";
import VideoCards from "../../shared/components/VideoCards/VideoCards";
import "./Home.scss";
import HomePageProvider from "./HomePageProvider";

type PageProps = {
  currentUser: any;
  movies: [];
  genre: [];
  newArrivals: [];
  cast: [];
};
const HomePage = () => {
  return (
    <HomePageProvider
      render={({
        currentUser,
        movies,
        genre,
        newArrivals,
        cast,
      }: PageProps) => {
        return (
          <div>
            <Header fullName={currentUser.displayName} />
            <MovieCards movies={movies} genre={genre} />
            <NewArrivalsCard movies={newArrivals} genre={genre} />
            <VideoCards />
            <CastCards Featuredcasts={cast} />
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default HomePage;
