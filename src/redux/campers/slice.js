import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersAll } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersAll.pending, handlePending)
      .addCase(fetchCampersAll.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampersAll.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
