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
    microwave: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters: (state, action) => {
      const { location, vehicleType, vehicleEquipment } = action.payload;
      state.location = location ?? state.location;
      state.vehicleType = vehicleType ?? state.vehicleType;

      state.vehicleEquipment = {
        ...state.vehicleEquipment,
        ...vehicleEquipment,
      };
    },
    resetFilters: (state) => {
      state.location = "";
      state.vehicleType = "";
      state.vehicleEquipment = { ...filtersInitialState.vehicleEquipment };
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
