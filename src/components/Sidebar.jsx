import logo from "../assets/image/Rectangle 63.png";
import logo2 from "../assets/image/Rectangle 62.png";
import iconHome from "../assets/image/HomeIcon.png";
import iconTruck from "../assets/image/fi_truck.png";
import { useState } from "react";
import { Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router";

const Sidebar = ({ isOpenSidebar }) => {
  const [route, setRoute] = useState("Dashboard");
  const toggleRoute = (value) => {
    setRoute(value);
    console.log(route);
  };
  const navigate = useNavigate();

  return (
    <div className="d-flex">
      <div
        className="vh-100 px-1 text-center text-white py-3"
        style={{ background: "#0D28A6" }}>
        <img src={logo} alt="" />
        <Nav className="navigation-menu  flex-column">
          <NavLink
            className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "64px" }}
            onClick={() => navigate("/dashboard")}>
            <div className="pt-3" onClick={() => toggleRoute("Dashboard")}>
              <img src={iconHome} alt="" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "64px" }}
            onClick={() => navigate("/listcars")}>
            <div onClick={() => toggleRoute("/listcars")}>
              <img src={iconTruck} alt="" />
              <p>Cars</p>
            </div>
          </NavLink>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
