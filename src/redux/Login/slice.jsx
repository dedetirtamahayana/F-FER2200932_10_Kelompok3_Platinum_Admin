import { createSlice } from "@reduxjs/toolkit";
// import auth from "../../utils/auth";

const auth = {
  setUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  },
  getUser() {
    if (typeof window !== 'undefined') {
      const storageUser = localStorage.getItem('user');
      return JSON.parse(storageUser);
    }
    return {};
  },
  clear() {
    localStorage.clear();
    window.location.reload();
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: auth.getUser(),
    loading: false,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.user = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      auth.setUser(action.payload);
    },
    loginFailure(state) {
      state.loading = false;
      state.user = null;
    },
    logout(state) {
      state.user = null;
      auth.clear();
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
