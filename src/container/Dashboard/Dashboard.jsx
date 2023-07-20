import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import hamburger from "../../assets/image/fi_menu.png";
import iconProfile from "../../assets/image/profile.png";
import logo from "../../assets/image/Rectangle 63.png";
import logo2 from "../../assets/image/Rectangle 62.png";
import ArrowPng from "../../assets/image/Arrow.png";
import Chart from "../../assets/image/Chart.png";
import Table from "../../assets/image/Table.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const SidebarMenu = ({ title }) => {
//   return (
//     <div className="vh-100 ps-2 pe-5 py-0" style={{ background: "white" }}>
//       <h5 className="mt-5">DASHBOARD</h5>
//       <h6
//         className="pt-2 pb-2 "
//         style={{ backgroundColor: "#CFD4ED", width: "100%" }}>
//         Dashboard
//       </h6>
//     </div>
//   );
// };

const Dashboard = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
    console.log(isOpenSidebar);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <div className="d-flex" style={{ backgroundColor: "#F4F5F7" }}>
        <Row>
          <Col className="col- ps-2.5" style={{ height: "550px" }}>
            <div className="h-100 py-3 ps-2" style={{ background: "white" }}>
              <h5 className="mt-2 mb-3">DASHBOARD</h5>
              <h6
                className="pt-2 pb-2 "
                style={{ backgroundColor: "#CFD4ED", width: "100%" }}>
                Dashboard
              </h6>
            </div>
          </Col>
          <Col>
            <div
              className="position-relative vw-100 vh-100 d-flex"
              style={{
                background: "#F4F5F7",
                marginLeft: isOpenSidebar ? "-120px" : 0,
              }}>
              <div className="w-100">
                {/* <Navbar
            style={{ background: "#FFFFFF" }}
            className="d-flex justify-content-between px-3 py-3">
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
                  style={{ color: "#0D28A6", borderColor: "#0D28A6" }}>
                  Search
                </button>
              </div>
              <div>
                <img className="pe-1" src={iconProfile} alt="" />
                Unis Badri
              </div>
            </Nav>
          </Navbar> */}
                <div className="px-3">
                  <ul className="list-group list-group-horizontal list-unstyled mt-4">
                    <li className="me-2">Dashboard</li>
                    <li className="me-2">
                      <Image src={ArrowPng}></Image>
                    </li>
                    <li className="me-2 mb-3">Dashboard</li>
                  </ul>
                  <h5 className="border-start border-4 border-primary ps-3">
                    Rented Car Visualization
                  </h5>
                  <div>
                    <p>Month</p>
                  </div>

                  <div>
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      isClearable
                    />
                    <Button className="ms-2">Go</Button>
                  </div>
                  <img
                    className="mt-4"
                    src={Chart}
                    style={{ width: "80%" }}></img>
                </div>
                <div className="px-3">
                  <h4>Dashboard</h4>
                  <h5 className="border-start border-4 border-primary ps-3">
                    List Order
                  </h5>
                  <img src={Table}></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div>
        <Sidebar isOpenSidebar={isOpenSidebar} />
      </div> */}
      </div>
    </Container>
  );
};

export default Dashboard;
