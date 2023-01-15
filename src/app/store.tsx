import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers/RootReducers";

const middleWare = [thunk];

export const Store = createStore(rootReducer, applyMiddleware(...middleWare));
