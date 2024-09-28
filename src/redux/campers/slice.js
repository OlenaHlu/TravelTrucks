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

const loadFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem("favoriteCampers");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favoriteCampers", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      let newFavorites;
      if (state.includes(camperId)) {
        newFavorites = state.filter((id) => id !== camperId);
      } else {
        newFavorites = [...state, camperId];
      }
      saveFavoritesToLocalStorage(newFavorites);

      return newFavorites;
    },
  },
});

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    selectedVehicleType: "",
    selectedEquipment: [],
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});
export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const { toggleFavorite } = favoritesSlice.actions;
export const campersReducer = campersSlice.reducer;
export const favoritesReducer = favoritesSlice.reducer;
