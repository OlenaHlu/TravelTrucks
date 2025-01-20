import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersAll, fetchCamperById } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersInitialState = {
  items: [],
  camper: {},
  loading: false,
  error: null,
  page: 1,
  total: 1,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: campersInitialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersAll.pending, handlePending)
      .addCase(fetchCampersAll.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.total = action.payload.total;
      })
      .addCase(fetchCampersAll.rejected, handleRejected)

      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { resetCampers, changePage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
