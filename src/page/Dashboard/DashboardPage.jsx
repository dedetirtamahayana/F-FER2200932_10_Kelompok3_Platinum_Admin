import React, { useState } from "react";
import Auth from "../../components/auth/index";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import Chart from "../../assets/image/Chart.png";
import "react-datepicker/dist/react-datepicker.css";
import TableComponent from "../../container/Dashboard/Table";
import BarChartComponent from "../../components/BarChart";
import DataTable from "react-data-table-component";
import DashboardTableComponent from "../../components/Table/index";

const DashboardPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Auth>
      <Layout>
        <Container fluid style={{ paddingLeft: "80px" }}>
          <div
            className="d-flex "
            style={{ backgroundColor: "#F4F5F7", width: "100%" }}>
            <div className="w-100">
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
                    <div className="mb-4 mt-4">
                      <Breadcrumb>
                        <BreadcrumbItem href="/listcars">
                          Dashboard
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                      </Breadcrumb>
                    </div>
                    <div className="mb-4">
                      <h5 className="border-start border-4 border-primary ps-3">
                        Rented Car Visualization
                      </h5>
                      <div>
                        <p>Choose Date</p>
                        <BarChartComponent />
                      </div>
                    </div>
                    <div className="px-3">
                      <DashboardTableComponent />
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
