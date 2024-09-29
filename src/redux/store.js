import { configureStore } from "@reduxjs/toolkit";
import { campersReducer, favoritesReducer } from "./campers/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});
