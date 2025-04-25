import { apiSlice } from "./api";
import authReducer from "../features/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filtersSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
