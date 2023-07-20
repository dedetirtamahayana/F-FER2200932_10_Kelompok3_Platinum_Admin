import { createSlice } from "@reduxjs/toolkit";
const listCarsSlice = createSlice({
  name: "listCar",
  initialState: {
    car: [],
    filter: [],
  },
  reducers: {
    remove(state, action) {
      const currentCars = [...state.car];
      const carId = action.payload;
      const filtered = currentCars.filter((item) => item.id !== carId);
      state.car = filtered;
    },
    filter(state, action) {
      const filterCar = action.payload;
      state.filter = filterCar;
    },
  },
});

export const { remove, filter } = listCarsSlice.actions;

export default listCarsSlice.reducer;
