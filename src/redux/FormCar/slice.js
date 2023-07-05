// import { createSlice } from '@reduxjs/toolkit';
// import dayjs from 'dayjs';

// const formCarSlice = createSlice({
//     name: "formCar",
//     initialState: {
//         cars: [],
//         carItem: {}, 
//         loading: false,
//     },
//     reducers: {
//         add (state, action) {
//             state.loading = true
//             const currentCars = [...state.cars];
//             const newCar = {
//                 ...action.payload,
//                 createdAt: dayjs().format()
//             }
//             currentCars.push(newCar);
//             state.cars = currentCars;
//         },
//         update (state, action) {
//             state.loading = true
//             const currentCars = [...state.cars];
//             const {index, ...carItem} = action.payload;
//             currentCars[index] = carItem
//             state.cars = currentCars;
//         },

//     },
// });

// export const {add, update} = formCarSlice.action;
// export default formCarSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const formCarSlice = createSlice({
    name: "formCar",
    initialState: {
        cars: [],
        carItem: {},
        loading: false
    },
    reducers: {
        add(state, action){
            state.loading = true
            const currentCars = [...state.cars];
            const newCar = {
                ...action.payload,
                createdAt: dayjs().format(),
            }
            currentCars.push(newCar);
            state.cars = currentCars;
        },
        
        update (state, action){
            state.loading = true
            const currentCars = [...state.cars];
            const {index, ...carItem} = action.payload;
            currentCars[index] = carItem
            state.cars = currentCars;
        },
        updateField (state) {
            state.loading = false
            state.cars = null
        },
        
    },
});

export const {add, update, updateField} = formCarSlice.actions;

export default formCarSlice.reducer;