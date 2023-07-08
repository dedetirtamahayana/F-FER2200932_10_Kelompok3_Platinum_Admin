import React from "react";
import Auth from "../../components/auth/index";
import auth from "../../utils/auth";
import Dashboard1 from "../../container/Dashboard/Dashboard";
import Dashboard2 from "../../container/Dashboard/index";
const DashboardPage = () => {
  return (
    <Auth>
      <Dashboard1 />
    </Auth>
  );
};

export default DashboardPage;
