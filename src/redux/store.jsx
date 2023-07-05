import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "../redux/Login/slice";
import formCarReducers from "../redux/FormCar/slice";

const rootReducer = combineReducers({
  login: loginReducers,
  formCar: formCarReducers,
});

export default configureStore({
  reducer: rootReducer,
});
