import React from "react";
import Auth from "../../components/auth";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import CardCar from "./Card";
import ArrowPng from "../../assets/image/Arrow.png";
import DeleteConfirm from "./DeleteConfirm";

import Layout from "../../components/Layout";

function ListCarsPage() {
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
                      <h5 className="mt-2 mb-4 ps-3">CARS</h5>
                      <h6
                        className="pt-2 pb-2 ps-3 "
                        style={{ backgroundColor: "#CFD4ED", width: "100%" }}>
                        List Cars
                      </h6>
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-4">
                      <ul className="list-group list-group-horizontal list-unstyled mt-4">
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
                          <Button
                            type="submit"
                            variant="primary"
                            className="rounded-0">
                            + Add New Car
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <div className="mb-4">
                      <ul className="list-group list-group-horizontal list-unstyled">
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0">
                            All
                          </Button>
                        </li>
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0">
                            2-4 people
                          </Button>
                        </li>
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0">
                            4-6 people
                          </Button>
                        </li>
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0">
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
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        {/* <div>
        <DeleteConfirm />
      </div> */}
      </Layout>
    </Auth>
  );
}

export default ListCarsPage;
