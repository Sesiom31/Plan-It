import { apiSlice } from "../services/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiSlice.endpoints.verifyAuth.matchFulfilled,
        (state, { payload }) => {
          state.isAuthenticated = true;
          state.user = payload.data?.user || null;
        },
      )
      .addMatcher(apiSlice.endpoints.verifyAuth.matchRejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addMatcher(apiSlice.endpoints.registerUser.matchFulfilled, (state) => {
        state.isAuthenticated = true;
      })
      .addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state) => {
        state.isAuthenticated = true;
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
