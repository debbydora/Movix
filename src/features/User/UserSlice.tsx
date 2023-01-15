import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  fullName: string;
  email: string;
  errorMessage: string;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: UserState = {
  fullName: "",
  email: "",
  errorMessage: "",
  isError: false,
  isSuccess: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userSelector = (state: { user: any }) => state.user;

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     username: "",
//     email: "",
//     isFetching: false,
//     isSuccess: false,
//     isError: false,
//     errorMessage: "",
//   },
//   reducers: {
//     // Reducer comes here
//   },
//   extraReducers: {
//     // Extra reducer comes here
//   },
// });
// export const userSelector = (state) => state.user;
