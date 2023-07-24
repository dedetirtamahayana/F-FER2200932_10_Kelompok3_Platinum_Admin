import React, { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
  ResponsiveContainer,
} from "recharts";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Chart.css";
import moment from "moment";

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [dateStart, dateEnd] = dateRange;

  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4OTc0NTk1MH0.H9ZGOf6L5RYQ05LsHEq8loe7fz9qZ0vl4cjXxTwhXnk";

  const fetchData = async () => {
    try {
      const start_rent_at = moment(dateStart).format("YYYY-MM-DD");
      const finish_rent_at = moment(dateEnd).format("YYYY-MM-DD");
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/order/reports?from=${start_rent_at}&until=${finish_rent_at}`,
        {
          headers: {
            access_token: `${access_token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleGetData = () => {
    fetchData();
  };

  const formatDate = (date) => {
    return moment(date).format("D");
  };

  return (
    <div>
      <div style={{ marginBottom: "40px" }} className="d-flex">
        <Datepicker
          dateFormat="dd-MMMM-yyyy"
          showIcon
          id="dateStartEnd"
          className="datePicker"
          selectsRange={true}
          startDate={dateStart}
          endDate={dateEnd}
          onChange={(update) => {
            setDateRange(update);
          }}
          minDate={dateStart}
          maxDate={
            dateStart
              ? new Date(
                  new Date(dateStart).setDate(
                    new Date(dateStart).getDate() + 31
                  )
                )
              : null
          }
          showDisabledMonthNavigation
          isClearable
          placeholderText="Pilih tanggal "
        />
        <button className="btn btn-date-picker" onClick={handleGetData}>
          Go
        </button>
      </div>
      {data.length > 0 && (
        <ResponsiveContainer height={400} width="90%">
          <BarChart
            data={data}
            margin={{
              left: 50,
              bottom: 50,
            }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="day"
              tickFormatter={formatDate}
              label={{ value: "Date", position: "insideBottom", dy: 40 }}
            />
            <YAxis
              label={{
                value: "Amount of Car Rented",
                angle: -90,
                position: "insideLeft",
                dy: 70,
                dx: -40,
              }}
            />
            <Tooltip />
            <Bar dataKey="orderCount" fill="#586B90" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarChartComponent;
