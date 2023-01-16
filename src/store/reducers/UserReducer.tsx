import * as types from "../types/type";
type InitialState = {
  loading: boolean;
  currentUser: any;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  currentUser: "",
  error: "",
};

type Action = {
  payload: any;
  //   type: "ADD_USER" | " ADD_USER_SUCCESS" | " ADD_USER_FAILURE";
  type:
    | "ADD_USER"
    | "ADD_USER_SUCCESS"
    | "ADD_USER_FAILURE"
    | "LOGIN_USER"
    | "LOGIN_USER_SUCCESS"
    | "LOGIN_USER_FAILURE"
    | "LOGOUT_USER"
    | "LOGOUT_USER_SUCCESS"
    | "LOGOUT_USER_FAILURE"
    | "SET_USER";
  user: any;
};

export const userReducer = (state = initialState, action: Action) => {
  console.log(action.type, "action");
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log(action.payload, "payload");
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case types.ADD_USER:
    case types.LOGIN_USER:
    case types.LOGOUT_USER:
      console.log("shege");
      return {
        ...state,
        loading: true,
      };

    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: "",
      };

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.ADD_USER_FAILURE:
    case types.LOGIN_USER_FAILURE:
    case types.LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
