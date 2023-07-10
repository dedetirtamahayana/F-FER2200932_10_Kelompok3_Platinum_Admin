import React, { useState } from "react";
import Auth from "../../components/auth/index";
import auth from "../../utils/auth";
import Layout from "../../components/Layout";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ArrowPng from "../../assets/image/Arrow.png";
import ReactDatePicker from "react-datepicker";
import Chart from "../../assets/image/Chart.png";
import Table from "../../assets/image/Table.png";
import "react-datepicker/dist/react-datepicker.css";

const DashboardPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Auth>
      <Layout>
        <Container fluid style={{ paddingLeft: "80px" }}>
          <div
            className="d-flex "
            style={{ backgroundColor: "#F4F5F7", width: "100%" }}>
            <div className="w-100" style={{ marginLeft: "0px" }}>
              {" "}
              <div style={{ backgroundColor: "#F4F5F7" }}>
                <Row className="d-flex">
                  <Col className="col-2 " style={{ height: "550px" }}>
                    <div
                      className="h-100 py-3 "
                      style={{ background: "white" }}>
                      <h5 className="mt-2 mb-4 ps-3">DASHBOARD</h5>
                      <h6
                        className="pt-2 pb-2 ps-3 "
                        style={{ backgroundColor: "#CFD4ED", width: "100%" }}>
                        Dashboard
                      </h6>
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-4">
                      <ul className="list-group list-group-horizontal list-unstyled mt-4">
                        <li className="me-2">Dashboard</li>
                        <li className="me-2">
                          <Image src={ArrowPng}></Image>
                        </li>
                        <li className="me-2">Dashboard</li>
                      </ul>
                    </div>
                    <div className="mb-4">
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
                        style={{ width: "70%" }}
                        alt=""></img>
                    </div>
                    <div className="px-3">
                      <h4>Dashboard</h4>
                      <h5 className="border-start border-4 border-primary ps-3">
                        List Order
                      </h5>
                      <img src={Table} style={{ width: "70%" }} alt=""></img>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </Auth>
  );
};

export default DashboardPage;
