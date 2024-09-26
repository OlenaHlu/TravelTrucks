import { createSlice } from "@reduxjs/toolkit";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: () => {},
});

export const campersReducer = campersSlice.reducer;
