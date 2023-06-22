import logo from "../assets/image/Rectangle 63.png";
import logo2 from "../assets/image/Rectangle 62.png";
import iconHome from "../assets/image/home.png";
import iconTruck from "../assets/image/fi_truck.png";
import { useState } from "react";

const SidebarMenu = ({ title }) => {
  return (
    <div className="vh-100 ps-2 pe-5 py-3" style={{ background: "#FFFFFF" }}>
      <img src={logo2} alt="" />
      <h5>DASHBOARD</h5>
      <p style={{ color: "#8A8A8A" }}>Dashboard</p>
    </div>
  );
};

const Sidebar = ({ isOpenSidebar }) => {
  const [route, setRoute] = useState("Dashboard");
  const toggleRoute = (value) => {
    setRoute(value);
    console.log(route);
  };

  return (
    <div
      className="d-flex"
      style={{
        marginLeft: isOpenSidebar ? "-300px" : 0,
        width: "300px",
        transition: "margin 300ms ease-in-out",
      }}
    >
      <div
        className="vh-100 px-1 text-center text-white py-3"
        style={{ background: "#0D28A6" }}
      >
        <img src={logo} alt="" />
        <div className="pt-3" onClick={() => toggleRoute("Dashboard")}>
          <img src={iconHome} alt="" />
          <p>Dashboard</p>
        </div>
        <div onClick={() => toggleRoute("Cars")}>
          <img src={iconTruck} alt="" />
          <p>Cars</p>
        </div>
      </div>
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
