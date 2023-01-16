import { auth } from "../../Firebase";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as types from "../types/type";
import { Dispatch } from "redux";

export type addDetailType = {
  fullName: string;
  email: string;
  password: string;
};
export type loginDetailType = {
  email: string;
  password: string;
};

const addUser = () => ({
  type: types.ADD_USER,
});

const addUserSuccess = (user: any) => ({
  type: types.ADD_USER_SUCCESS,
  payload: user,
});

const addUserFailure = (error: any) => ({
  type: types.ADD_USER_FAILURE,
  payload: error,
});

const loginUser = () => ({
  type: types.LOGIN_USER,
});

const loginUserSuccess = (user: any) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserFailure = (error: any) => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error,
});

const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS,
});

const logoutUserFailure = (error: any) => ({
  type: types.LOGOUT_USER_FAILURE,
  payload: error,
});

export const setUser = (user: any) => ({
  type: types.SET_USER,
  payload: user,
});

export const registerationOfUser = ({
  fullName,
  email,
  password,
}: addDetailType) => {
  return (dispatch: Dispatch) => {
    dispatch(addUser());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: fullName,
        });
        dispatch(addUserSuccess(user));
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        dispatch(addUserFailure(errorMessage[1]));
      });
  };
};

export const loginUserInitiation = ({ email, password }: loginDetailType) => {
  console.log("got here");
  return (dispatch: Dispatch) => {
    dispatch(loginUser());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(auth.currentUser?.displayName, "current");
        // console.log("testing user", user);
        dispatch(loginUserSuccess(user));
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        dispatch(loginUserFailure(errorMessage[1]));
      });
  };
};

export const handleUserLogout = () => {
  return (dispatch: Dispatch) => {
    dispatch(logoutUser());
    signOut(auth)
      .then(() => dispatch(logoutUserSuccess()))
      .catch((error) => {
        const errorMessage = error.message.split(":");
        dispatch(logoutUserFailure(errorMessage[1]));
      });
  };
};
