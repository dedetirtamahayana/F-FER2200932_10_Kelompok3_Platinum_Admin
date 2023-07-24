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

import moment from "moment";

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4OTc0NTk1MH0.H9ZGOf6L5RYQ05LsHEq8loe7fz9qZ0vl4cjXxTwhXnk";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/order/reports?from=${startDate}&until=${endDate}`,
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

  const handleChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e) => {
    setEndDate(e.target.value);
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
        <input
          className="form-control me-2"
          style={{
            width: "150px",
          }}
          type="date"
          value={startDate}
          onChange={handleChangeStartDate}
        />
        <input
          className="form-control me-2"
          style={{
            width: "150px",
          }}
          type="date"
          value={endDate}
          onChange={handleChangeEndDate}
        />

        <button className="btn btn-primary" onClick={handleGetData}>
          Get Data
        </button>
      </div>
      {data.length > 0 && (
        <ResponsiveContainer height={400} width="90%">
          <BarChart
            data={data}
            margin={{
              left: 50,
              bottom: 50,
            }}>
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
