import * as types from "../types/type";
import { Dispatch } from "redux";
import axios from "axios";

const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
});

const fetchMoviesSuccess = (movies: any) => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesFailure = (error: any) => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload: error,
});

const fetchFeatureMovies = () => ({
  type: types.FETCH_FEATURED_MOVIES,
});

const fetchFeatureMoviesSuccess = (featuredMovies: any) => ({
  type: types.FETCH_FEATURED_MOVIES_SUCCESS,
  payload: featuredMovies,
});

const fetchFeatureMoviesFailure = (error: any) => ({
  type: types.FETCH_FEATURED_MOVIES_FAILURE,
  payload: error,
});

export const fetchMoviesInitiation = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchMovies());
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=19c570566ad687496fa002fda7fa2934"
      )
      .then((response) => {
        const movies = response.data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error));
      });
  };
};

export const fetchFeaturedMovies = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchFeatureMovies());
    axios
      .get(
        "https://api.themoviedb.org/3/movie/latest?api_key=19c570566ad687496fa002fda7fa2934 "
      )
      .then((response) => {
        const featuredMovies = response.data;
        dispatch(fetchFeatureMoviesSuccess(featuredMovies));
      })
      .catch((error) => {
        dispatch(fetchFeatureMoviesFailure(error));
      });
  };
};
