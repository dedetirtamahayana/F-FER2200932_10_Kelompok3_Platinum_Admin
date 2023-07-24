import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    table: {
      data: null,
      page: 1,
      pageSize: 10,
      sort: null,
    },
    loading: false,
  },
  reducers: {
    setSort(state, action) {
      state.table.sort = action.payload;
    },
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
  setSort,
  setPage,
  setPageSize,
  fetchDataProgress,
  fetchDataSuccess,
  fetchDataFailed,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
