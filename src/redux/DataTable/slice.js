import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    table: {
      data: null,
      page: 1,
      pageSize: 10,
    },
    loading: false,
  },
  reducers: {
    setPage(state, action) {
      state.table.page = action.payload;
    },
    setPageSize(state, action) {
      state.table.pageSize = action.payload;
    },
    fetchDataProgress(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.table.data = action.payload;
      state.error = null;
    },
    fetchDataFailed(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setPage,
  setPageSize,
  fetchDataProgress,
  fetchDataSuccess,
  fetchDataFailed,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
