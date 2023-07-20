import React from "react";
import {
  Button,
  Dropdown,
  Form,
  Navbar,
  NavItem,
  NavLink,
} from "react-bootstrap";
import "./Dashboard.css";

import iconSidebar from "../../assets/image/Rectangle 63.png";
import iconHome from "../../assets/image/HomeIcon.png";
import iconSidebar2 from "../../assets/image/Rectangle 62.png";
import iconCar from "../../assets/image/fi_truck.png";
import iconHumber from "../../assets/image/fi_menu.png";
import iconUser from "../../assets/image/profile.png";

function Dashboard() {
  return (
    <div
      className="d-flex position-relative vh-100 vw-100"
      style={{ background: "#F4F5F7" }}>
      <div className="d-flex pt-3 p-2" style={{ background: "#0D28A6" }}>
        <div className="text-center text-white">
          <div className="pb-3">
            <img src={iconSidebar} alt="" />
          </div>
          <div>
            <img src={iconHome} alt="" />
          </div>
          <div className="pb-3" style={{ fontSize: "13px" }}>
            Dashboard
          </div>
          <div>
            <img src={iconCar} alt="" />
          </div>
          <div style={{ fontSize: "13px" }}>Cars</div>
        </div>
      </div>
      <div className="w-100">
        <Navbar className="border" style={{ background: "#ffff" }}>
          <Navbar.Brand href="" className="pe-5 ps-4">
            <img src={iconSidebar2} alt="" />
          </Navbar.Brand>
          <Navbar.Brand style={{ paddingLeft: "4rem" }} href="">
            <img style={{ cursor: "pointer" }} src={iconHumber} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex pe-4">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button
                variant="outline-primary fw-bold"
                style={{ color: "#0D28A6", outlineColor: "#0D28A6" }}>
                Search
              </Button>
            </Form>
            <div className="d-flex justify-content-center align-items-center pe-4">
              <img className="pe-3" src={iconUser} alt="" />
              <Dropdown as={NavItem} className="d-flex">
                <Dropdown.Toggle as={NavLink}>Unis Badri</Dropdown.Toggle>
                <div>
                  <Dropdown.Menu className="">
                    <Dropdown.Item>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div
          className="d-flex pt-3"
          style={{ width: "15rem", height: "866px", background: "#ffff" }}>
          <div className="w-100">
            <div className="pt-3 pb-3 ps-4">
              <h5 style={{ color: "#8A8A8A" }}>DASHBOARD</h5>
            </div>
            <div className="bg-text ps-4">
              <h6 className="fw-bold">Dashboard</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
