import CastCards from "../../shared/components/CastCards/CastCards";
import Footer from "../../shared/components/Footer/Footer";
import Header from "../../shared/components/Header/Header";
import MovieCards from "../../shared/components/MovieCards/MovieCards";
import NewArrivalsCard from "../../shared/components/NewArrivalsCard/NewArrivalsCard";
import "./Home.scss";
import HomePageProvider from "./HomePageProvider";

type PageProps = {
  currentUser: any;
  movies: [];
  genre: [];
  newArrivals: [];
  cast: [];
  topRated: [];
  imageIndex: any;
  getRandomImgs: [];
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        imageIndex,
        getRandomImgs,
        query,
        onQueryChange,
      }: PageProps) => {
        return (
          <div>
            <Header
              fullName={currentUser?.displayName}
              imageIndex={imageIndex}
              getRandomImgs={getRandomImgs}
              query={query}
              onQueryChange={onQueryChange}
            />
            <MovieCards movies={movies} genre={genre} query={query} />
            <NewArrivalsCard movies={newArrivals} genre={genre} query={query} />
            {/* <VideoCards /> */}
            <MovieCards movies={movies} genre={genre} query={query} />
            <CastCards Featuredcasts={cast} />
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default HomePage;
