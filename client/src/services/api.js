import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    verifyAuth: builder.query({
      query: () => "auth/verifyToken",
    }),
  }),
});

export const { useVerifyAuthQuery } = apiSlice;
