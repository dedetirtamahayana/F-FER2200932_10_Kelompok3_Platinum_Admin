// import { Container, Row } from 'react-bootstrap';
// import ListCars from './ListCars';

// function Results() {
//     return (
//         <>
            
//                 <Row>
//                     <ListCars />
//                 </Row>
                
            
//         </>
//         );
//     }
    
//     export default Results;

import React from "react";
import Auth from "../../components/auth";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import CardCar from "./Card";
import ArrowPng from "../../assets/image/Arrow.png";
import DeleteConfirm from "./DeleteConfirm";
import Car from "./ListCar";
import { useNavigate } from "react-router";
import Navbar from '../../components/Navbar/Navbar';
import classes from '../../container/Dashboard/Dashboard.module.css';

function ListCars() {
    const navigate = useNavigate();
    
  return (
    <Auth>
      <Container fluid className={`p-0 m-0 ${classes.containerDashboard}`}>
        <Navbar currentPage="view-car" />
       
        <Row className="m-0">
          <Col
            xs="auto"
            className={`${classes.colDashboard} d-none d-md-block h-100`}></Col>
        </Row>
      <Container className="container-fluid" style={{marginLeft: 350}}>
        <div className="mb-4">
          <ul className="list-group list-group-horizontal list-unstyled">
            <li className="me-2">Cars</li>
            <li className="me-2">
              <Image src={ArrowPng}></Image>
            </li>
            <li className="me-2">List Cars</li>
          </ul>
        </div>
        <div className="mb-4">
          <Row>
            <Col className="col-6">
              <h3>List Car</h3>
            </Col>
            <Col className="col-6 d-flex justify-content-end">
              <Button type="submit" variant="primary" className="rounded-0"
              onClick={() => navigate('/addcar')}
              >
                + Add New Car
              </Button>
            </Col>
          </Row>
        </div>
        <div className="mb-4">
          <ul className="list-group list-group-horizontal list-unstyled">
            <li className="me-3">
              <Button variant="outline-primary" className="rounded-0">
                All
              </Button>
            </li>
            <li className="me-3">
              <Button variant="outline-primary" className="rounded-0">
                2-4 people
              </Button>
            </li>
            <li className="me-3">
              <Button variant="outline-primary" className="rounded-0">
                4-6 people
              </Button>
            </li>
            <li className="me-3">
              <Button variant="outline-primary" className="rounded-0">
                6-8 people
              </Button>
            </li>
          </ul>
        </div>
        <div>
            <Row>
                <Car />
            </Row>
          
        </div>
      </Container>
      {/* <div>
        <DeleteConfirm />
      </div> */}
      </Container>
    </Auth>
  );
}

export default ListCars;

    