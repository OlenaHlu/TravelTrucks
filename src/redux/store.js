import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
