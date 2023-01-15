import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setUser } from "../../store/actions/userActions";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { fetchMoviesInitiation } from "../../store/actions/movieActions";

export type HomepageProviderProps = {
  render: any;
};

const HomePageProvider = (props: HomepageProviderProps) => {
  const { currentUser } = useSelector((state: any) => state.user);
  const { movies } = useSelector((state: any) => state.movies);
  const dispatch: Dispatch<any> = useDispatch();
  const [genre, setGenre] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
    fetchMovies();
    fetchGenres();
    fetchNewArrivals();
    getFeaturedCasts();
    // eslint-disable-next-line
  }, [dispatch]);

  // const handleLogout = () => {
  //   if (currentUser) {
  //     dispatch(handleUserLogout());
  //   }
  // };

  const fetchMovies = () => {
    dispatch(fetchMoviesInitiation());
  };

  const fetchGenres = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=6e6124f444afd2e146d6bf5ed76e8909"
      )
      .then((response) => {
        setGenre(response.data.genres);
      })
      .catch((error: any) => console.log(error));
  };

  const fetchNewArrivals = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=6e6124f444afd2e146d6bf5ed76e8909"
      )
      .then((response) => {
        setNewArrivals(response.data.results);
      })
      .catch((error: any) => console.log(error));
  };

  const getFeaturedCasts = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=6e6124f444afd2e146d6bf5ed76e8909"
      )
      .then((response) => {
        setCast(response.data.results);
      })
      .catch((error: any) => console.log(error));
  };
  console.log(cast);
  return props.render({
    currentUser,
    movies,
    genre,
    newArrivals,
    cast,
  });
};

export default HomePageProvider;
