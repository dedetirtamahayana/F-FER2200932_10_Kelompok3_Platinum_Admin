import { createSlice } from "@reduxjs/toolkit";
const listCarsSlice = createSlice({
  name: "listCar",
  initialState: {
    car: [],
  },
  reducers: {
    remove(state,action) {
        const currentCars = [...state.car];
        const carId = action.payload;
        const filtered = currentCars.filter((item) => item.id !== carId);
        state.car = filtered
    },
  },
});

export const { remove } = listCarsSlice.actions;

export default listCarsSlice.reducer;