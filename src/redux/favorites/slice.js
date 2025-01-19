import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = {
  favIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favIds.includes(camperId)) {
        state.favIds = state.favIds.filter((favId) => favId !== id);
      } else {
        state.favIds.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
