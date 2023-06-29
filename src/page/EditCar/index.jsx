import React from "react";
import Auth from "../../components/auth/index";
import auth from "../../utils/auth";
import EditCar from '../../container/Editcar/FormEditCar';

const Dashboard = () => {
  return (
    <Auth>
     <EditCar />
    </Auth>
  );
};

export default Dashboard;