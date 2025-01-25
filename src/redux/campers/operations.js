import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampersAll = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, filters = {}, reset = false }, thunkAPI) => {
    try {
      const { location, vehicleType, vehicleEquipment = [] } = filters;

      // console.log("Received filters:", filters);

      const vehicleTypeMapping = {
        Van: "panelTruck",
        "Fully Integrated": "fullyIntegrated",
        Alcove: "alcove",
      };

      const params = {
        page,
        limit: 5,
      };

      if (location) {
        params.location = location;
      }
      if (vehicleType) {
        params.form =
          vehicleTypeMapping[vehicleType] || vehicleType.toLowerCase();
        // console.log("Form added (vehicleType):", params.form);
      }

      Object.keys(vehicleEquipment).forEach((equipment) => {
        if (vehicleEquipment[equipment]) {
          params[equipment] = true;
        }
      });

      // console.log("Fetching with params:", params);

      const { data } = await axios.get("/campers", {
        params,
      });
      // console.log("Server response:", data);
      return { reset, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
