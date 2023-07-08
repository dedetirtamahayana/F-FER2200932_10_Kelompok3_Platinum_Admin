import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import hamburger from "../../src/assets/image/fi_menu.png";
import iconProfile from "../../src/assets/image/profile.png";
import logo2 from "../../src/assets/image/Rectangle 62.png";

const NavbarComponent = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
    console.log(isOpenSidebar);
  };

  return (
    <Navbar
      style={{ background: "#FFFFFF" }}
      className="d-flex justify-content-between px-3 py-3">
      <Nav>
        <img src={logo2} alt="logo2" style={{ marginLeft: "0rem" }} />
        <img
          src={hamburger}
          onClick={toggleSidebar}
          style={{ marginLeft: "4rem" }}
        />
      </Nav>

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
            style={{ color: "#0D28A6", borderColor: "#0D28A6" }}>
            Search
          </button>
        </div>
        <div>
          <img className="pe-1" src={iconProfile} alt="" />
          Unis Badri
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
