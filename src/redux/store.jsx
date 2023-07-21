import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "../redux/Login/slice";
import formCarReducers from "../redux/FormCar/slice";
import listCarReducers from "../redux/ListCar/slice";
import dashboardSlice from "../redux/DataTable/slice";

const rootReducer = combineReducers({
  login: loginReducers,
  formCar: formCarReducers,
  listcar: listCarReducers,
  dashboard: dashboardSlice,
});

export default configureStore({
  reducer: rootReducer,
});
