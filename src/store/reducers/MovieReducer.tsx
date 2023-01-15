import * as types from "../types/type";
type InitialState = {
  movies: any[];
  featuredMovies: any[];
  loading: boolean;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  movies: [],
  featuredMovies: [],
  error: "",
};

type Action = {
  payload: any;
  type:
    | "FETCH_MOVIES"
    | "FETCH_MOVIES_SUCCESS"
    | "FETCH_MOVIES_FAILURE"
    | "FETCH_FEATURED_MOVIES"
    | "FETCH_FEATURED_MOVIES_SUCCESS"
    | "FETCH_FEATURED_MOVIES_FAILURE";
};

export const MovieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
    case types.FETCH_FEATURED_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case types.FETCH_FEATURED_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        featuredMovies: action.payload,
      };
    case types.FETCH_MOVIES_FAILURE:
    case types.FETCH_FEATURED_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
