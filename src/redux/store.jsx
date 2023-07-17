import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "../redux/Login/slice";
import formCarReducers from "../redux/FormCar/slice";
import listCarReducers from "../redux/ListCar/slice";

const rootReducer = combineReducers({
  login: loginReducers,
  formCar: formCarReducers,
  listcar: listCarReducers,
});

export default configureStore({
  reducer: rootReducer,
});
