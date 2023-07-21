import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function DashboardTable() {
  const {
    table: { data },
  } = useSelector((state) => state.dashboard);

  return data && data.orders && data.orders.length > 0 ? (
    <>
      <div className="main-table">
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>User Email</th>
              <th>Car</th>
              <th>Start Rent</th>
              <th>Finish Rent</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.User.email}</td>
                <td>{item.Car || "Unknown"}</td>
                <td>{moment(item.start_rent_at).format("DD-MM-YYYY HH:mm")}</td>
                <td>
                  {moment(item.finish_rent_at).format("DD-MM-YYYY HH:mm")}
                </td>
                <td>Rp.{item.total_price.toLocaleString("id-ID")}</td>
                <td>{item.Status || "Null"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <></>
  );
}

export default DashboardTable;
