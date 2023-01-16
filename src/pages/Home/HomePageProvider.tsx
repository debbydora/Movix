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
  const [topRated, setTopRated] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [query, setQuery] = useState("");
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
    getTopRatedMovies();
    changeImage();
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
        "https://api.themoviedb.org/3/genre/movie/list?api_key=19c570566ad687496fa002fda7fa2934"
      )
      .then((response) => {
        setGenre(response.data.genres);
      })
      .catch((error: any) => console.log(error));
  };

  const fetchNewArrivals = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=19c570566ad687496fa002fda7fa2934"
      )
      .then((response) => {
        setNewArrivals(response.data.results);
      })
      .catch((error: any) => console.log(error));
  };

  const getFeaturedCasts = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=19c570566ad687496fa002fda7fa2934"
      )
      .then((response) => {
        setCast(response.data.results);
      })
      .catch((error: any) => console.log(error));
  };
  const getTopRatedMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=6e6124f444afd2e146d6bf5ed76e8909"
      )
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((error: any) => console.log(error));
  };

  // const searchMovie = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/search/movie?api_key=19c570566ad687496fa002fda7fa2934&query=${query}`
  //     );
  //     const data = await response.json();
  //     setNewArrivals(data);
  //     movies.push(data);
  //     //
  //     // set the moviearray to the data.results;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const onQueryChange = (e: any) => {
    setQuery(e.target.value);
  };
  const getRandomImgs = topRated?.map((r: any) => r);
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * getRandomImgs?.length);
    setImageIndex(randomNumber);
  };
  return props.render({
    currentUser,
    movies,
    genre,
    newArrivals,
    cast,
    imageIndex,
    getRandomImgs,
    query,
    onQueryChange,
  });
};

export default HomePageProvider;
