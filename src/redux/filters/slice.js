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
      // state.location = location;
      // state.vehicleType = vehicleType;
      // state.vehicleEquipment = vehicleEquipment.flat();
      state.filters = {
        ...state.filters,
        location,
        vehicleType,
        vehicleEquipment: {
          ...state.filters.vehicleEquipment,
          ...vehicleEquipment,
        },
      };
    },
    resetFilters: () => filtersInitialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
