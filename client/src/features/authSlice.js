import { apiSlice } from "../services/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiSlice.endpoints.verifyAuth.matchFulfilled,
        (state, action) => {
          console.log({ action });
          state.isAuthenticated = action.payload.success;
          state.username = action.payload.user?.username;
        },
      )
      .addMatcher(
        apiSlice.endpoints.verifyAuth.matchRejected,
        (state, action) => {
          console.log({ action: action.payload.data });
          state.isAuthenticated = false;
          state.username = null;
        },
      )
      .addMatcher(
        apiSlice.endpoints.registerUser.matchFulfilled,
        (state, action) => {
          state.isAuthenticated = true;
          state.username = action.payload.username;
        },
      )
      .addMatcher(
        apiSlice.endpoints.loginUser.matchFulfilled,
        (state, action) => {
          state.isAuthenticated = true;
          state.username = action.payload.username;
        },
      )
      .addMatcher(apiSlice.endpoints.logoutUser.matchFulfilled, (state) => {
        state.isAuthenticated = false;
        state.username = null;
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
