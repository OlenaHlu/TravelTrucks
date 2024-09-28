import { configureStore } from "@reduxjs/toolkit";
import {
  campersReducer,
  favoritesReducer,
  filtersReducer,
} from "./campers/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
