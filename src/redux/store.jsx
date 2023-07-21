import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "../redux/Login/slice";
import dashboardSlice from "../redux/DataTable/slice";

const rootReducer = combineReducers({
  login: loginReducers,
  dashboard: dashboardSlice,
});

export default configureStore({
  reducer: rootReducer,
});
