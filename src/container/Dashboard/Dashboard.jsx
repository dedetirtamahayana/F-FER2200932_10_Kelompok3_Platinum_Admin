import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import hamburger from "../../assets/image/fi_menu.png";
import iconProfile from "../../assets/image/profile.png";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
    console.log(isOpenSidebar);
  };

  return (
    <div
      className="position-relative vw-100 vh-100 d-flex"
      style={{ background: "#F4F5F7" }}
    >
      <Sidebar isOpenSidebar={isOpenSidebar} />

      <div className="w-100">
        <Navbar
          style={{ background: "#FFFFFF" }}
          className="d-flex justify-content-between px-3 py-3"
        >
          <img src={hamburger} onClick={toggleSidebar} />
          <Nav>
            <div className="d-flex pe-4">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn fw-bold"
                type="submit"
                style={{ color: "#0D28A6", borderColor: "#0D28A6" }}
              >
                Search
              </button>
            </div>
            <div>
              <img className="pe-1" src={iconProfile} alt="" />
              Unis Badri
            </div>
          </Nav>
        </Navbar>
        <div className="px-3">
          Dashboard
          <h2 className="border-start border-4 border-primary ps-3">
            Rented Car Visualization
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
