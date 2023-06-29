import React from "react";
import Auth from "../../components/auth/index";
import auth from "../../utils/auth";
import AddCar from '../../container/AddCar/FormAddCar';

const Dashboard = () => {
  return (
    <Auth>
     <AddCar />
    </Auth>
  );
};

export default Dashboard;