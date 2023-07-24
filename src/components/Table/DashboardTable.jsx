import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Table.css";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/DataTable/slice";
import { FaSortDown, FaSortUp } from "react-icons/fa6";

function DashboardTable() {
  const {
    table: { data, sort },
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  return data && data.orders && data.orders.length > 0 ? (
    <>
      <div className="main-table">
        <table className="table text-center ">
          <thead className="thead-dark">
            <tr>
              <th>No </th>
              <th>
                User Email
                <FaSortUp
                  className="arrow-up"
                  value="user_email:asc"
                  onClick={(e) => dispatch(setSort("user_email:asc"))}
                />
                <FaSortDown
                  className="arrow-down"
                  value="user_email:desc"
                  onClick={(e) => dispatch(setSort("user_email:desc"))}
                />
              </th>
              <th>
                Car
                <FaSortUp
                  className="arrow-up"
                  value="user_email:asc"
                  onClick={(e) => dispatch(setSort("car_name:asc"))}
                />
                <FaSortDown
                  className="arrow-down"
                  value="user_email:desc"
                  onClick={(e) => dispatch(setSort("car_name:desc"))}
                />
              </th>
              <th>
                Start Rent
                <FaSortUp
                  className="arrow-up"
                  value="user_email:asc"
                  onClick={(e) => dispatch(setSort("start_rent_at:asc"))}
                />
                <FaSortDown
                  className="arrow-down"
                  value="user_email:desc"
                  onClick={(e) => dispatch(setSort("start_rent_at:desc"))}
                />
              </th>
              <th>
                Finish Rent
                <FaSortUp
                  className="arrow-up"
                  value="user_email:asc"
                  onClick={(e) => dispatch(setSort("finish_rent_at:asc"))}
                />
                <FaSortDown
                  className="arrow-down"
                  value="user_email:desc"
                  onClick={(e) => dispatch(setSort("finish_rent_at:desc"))}
                />
              </th>
              <th>
                Price
                <FaSortUp
                  className="arrow-up"
                  value="user_email:asc"
                  onClick={(e) => dispatch(setSort("price:asc"))}
                />
                <FaSortDown
                  className="arrow-down"
                  value="user_email:desc"
                  onClick={(e) => dispatch(setSort("price:desc"))}
                />
              </th>
              <th>
                Category
                <FaSortUp
                  className="arrow-up"
                  value="user_email:asc"
                  onClick={(e) => dispatch(setSort("category:asc"))}
                />
                <FaSortDown
                  className="arrow-down"
                  value="user_email:desc"
                  onClick={(e) => dispatch(setSort("category:desc"))}
                />
              </th>
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
