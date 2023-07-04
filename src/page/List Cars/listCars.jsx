import React from "react";
import Auth from "../../components/auth";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import CardCar from "./Card";
import ArrowPng from "../../assets/image/Arrow.png";
import DeleteConfirm from "./DeleteConfirm";

function ListCarsPage() {
  return (
    <Auth>
      <Container>
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
              <Button type="submit" variant="primary" className="rounded-0">
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
          <Row className=" justify-content-between mb-4">
            <Col className="col-auto">
              <CardCar />
            </Col>
            <Col className="col-auto">
              <CardCar />
            </Col>
            <Col className="col-auto">
              <CardCar />
            </Col>
          </Row>
          <Row className=" justify-content-between mb-4">
            <Col className="col-auto">
              <CardCar />
            </Col>
            <Col className="col-auto">
              <CardCar />
            </Col>
            <Col className="col-auto">
              <CardCar />
            </Col>
          </Row>
          <Row className=" justify-content-between mb-4">
            <Col className="col-auto">
              <CardCar />
            </Col>
            <Col className="col-auto">
              <CardCar />
            </Col>
            <Col className="col-auto">
              <CardCar />
            </Col>
          </Row>
        </div>
      </Container>
      {/* <div>
        <DeleteConfirm />
      </div> */}
    </Auth>
  );
}

export default ListCarsPage;
