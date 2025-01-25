import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  vehicleType: "",
  vehicleEquipment: {
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters: (state, action) => {
      console.log("Action payload:", action.payload);
      const { location, vehicleType, vehicleEquipment } = action.payload;
      if (location !== undefined) {
        state.location = location;
      }
      if (vehicleType !== undefined) {
        state.vehicleType = vehicleType;
      }
      if (vehicleEquipment !== undefined) {
        state.vehicleEquipment = {
          ...state.vehicleEquipment,
          ...vehicleEquipment,
        };
      }
    },
    resetFilters: () => filtersInitialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
