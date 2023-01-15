import { combineReducers } from "redux";
import { MovieReducer } from "./MovieReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  movies: MovieReducer,
});

export default rootReducer;
