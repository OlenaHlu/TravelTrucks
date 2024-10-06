import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersAll, fetchCamperById } from "./operations";

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
    camper: {},
    loading: false,
    error: null,
    filters: {
      location: "",
      selectedVehicleType: "",
      selectedEquipment: [],
    },
  },
  reducers: {
    setLocation: (state, action) => {
      state.filters.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.filters.selectedVehicleType = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;

      if (state.filters.selectedEquipment.includes(equipment)) {
        state.filters.selectedEquipment =
          state.filters.selectedEquipment.filter((item) => item !== equipment);
      } else {
        state.filters.selectedEquipment.push(equipment);
      }
    },
    resetFilters: (state) => {
      state.filters = {
        location: "",
        selectedVehicleType: "",
        selectedEquipment: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersAll.pending, handlePending)
      .addCase(fetchCampersAll.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
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

export const { toggleFavorite } = favoritesSlice.actions;

export const { setLocation, setVehicleType, toggleEquipment, resetFilters } =
  campersSlice.actions;

export const campersReducer = campersSlice.reducer;
export const favoritesReducer = favoritesSlice.reducer;
