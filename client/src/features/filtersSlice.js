import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.search;
    },

    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = filtersSlice.actions;
export default filtersSlice.reducer;
