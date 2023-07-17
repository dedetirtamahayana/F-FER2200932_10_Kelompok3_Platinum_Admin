import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Container fluid className={`p-0 m-0 ${classes.containerDashboard}`}>
        <Navbar currentPage="dashboard" />
        <Row className="m-0">
          <Col
            xs="auto"
            className={`${classes.colDashboard} d-none d-md-block h-100`}></Col>
        </Row>
        <div className={classes.dataGraphTable}>
          <div>
            <p>ini halaman dashboard</p>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Dashboard
