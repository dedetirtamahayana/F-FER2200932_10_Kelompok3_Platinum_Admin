import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardTable from "./DashboardTable";
import DashboardPagination from "./DashboardPagination";

import {
  fetchDataProgress,
  fetchDataFailed,
  fetchDataSuccess,
} from "../../redux/DataTable/slice";

function Dashboard() {
  const {
    table: { page, pageSize, sort },
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const fetchOrders = async () => {
    try {
      dispatch(fetchDataProgress());
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/order",
        {
          params: {
            page,
            pageSize,
            sort,
          },
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4ODM2NzI5NH0.ZEx23CVB0vSLzPT3OlTF27mHaHKwlumJjNTvaAfQRIc",
          },
        }
      );
      dispatch(fetchDataSuccess(response.data));
      console.log(fetchOrders);
    } catch (error) {
      console.log("error >", error);
      dispatch(fetchDataFailed());
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [page, pageSize, sort]);

  return (
    <div className="section-table">
      <div className="row row-table">
        <h3 className="title-dashboard">Dashboard</h3>
        {/* <img className="text-img " src={titlesquare} alt="title-img"></img> */}
        <p className="fw-bold title-img">List Order</p>
        <DashboardTable />
        <DashboardPagination />
      </div>
    </div>
  );
}

export default Dashboard;
