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
} from "recharts";

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4OTc0NTk1MH0.H9ZGOf6L5RYQ05LsHEq8loe7fz9qZ0vl4cjXxTwhXnk"; // Replace this with your actual access token

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

  return (
    <div>
      <div>
        <input type="date" value={startDate} onChange={handleChangeStartDate} />
        <input type="date" value={endDate} onChange={handleChangeEndDate} />
        <button onClick={handleGetData}>Get Data</button>
      </div>
      {data.length > 0 && (
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orderCount" fill="#8884d8" />
          <Text values="Halo" />
        </BarChart>
      )}
    </div>
  );
};

export default BarChartComponent;
