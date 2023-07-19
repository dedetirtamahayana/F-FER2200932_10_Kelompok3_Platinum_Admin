import React, { useEffect, useState } from "react";
import "./ListCarsPage.css";
import Auth from "../../components/auth";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import CardCar from "./Card";
import DeleteConfirm from "./DeleteConfirm";
import { useNavigate } from "react-router";
import axios from "axios";

function ListCarsPage({ name, price, category, image, updatedAt }) {
  const navigate = useNavigate();
  const [cars, setCars] = useState();
  const [category1, setCategory1] = useState();
  const carCategory = {};

  const fetchListCars = async () => {
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/car",
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
        }
      );
      console.log(response.data);
      setCars(response.data.cars);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchListCars();
  }, [category]);

  const [categories, setCategories] = useState(cars);
  const filterCars = (carCategory) => {
    const result = cars.filter((currentData) => {
      return currentData.category === carCategory;
    });
    setCategories(result);
  };
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
                    <div className="mb-4 mt-4">
                      <Breadcrumb>
                        <BreadcrumbItem href="/listcars">Cars</BreadcrumbItem>
                        <BreadcrumbItem active>List Cars</BreadcrumbItem>
                      </Breadcrumb>
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
                            className="rounded-0"
                            onClick={() => navigate("/addcar")}>
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
                            className="rounded-0"
                            onClick={() => filterCars("small")}>
                            All
                          </Button>
                        </li>
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0"
                            onClick={() => filterCars("small")}>
                            2-4 peoples
                          </Button>
                        </li>
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0"
                            onClick={() => filterCars("medium")}>
                            4-6 people
                          </Button>
                        </li>
                        <li className="me-3">
                          <Button
                            variant="outline-primary"
                            className="rounded-0"
                            onClick={() => filterCars("large")}>
                            6-8 people
                          </Button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Row className="g-3">
                        {cars &&
                          cars.length > 0 &&
                          cars.map((item) => (
                            <Col lg={4}>
                              <CardCar
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                category={item.category}
                                updatedAt={item.updatedAt}
                              />
                            </Col>
                          ))}
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
