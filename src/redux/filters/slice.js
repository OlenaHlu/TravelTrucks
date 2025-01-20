import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  vehicleType: "",
  vehicleEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters: (state, action) => {
      const { location, vehicleType, vehicleEquipment } = action.payload;
      state.location = location;
      state.vehicleType = vehicleType;
      state.vehicleEquipment = vehicleEquipment;
    },
    resetFilters: (state) => {
      state.location = "";
      state.vehicleType = "";
      state.vehicleEquipment = [];
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
