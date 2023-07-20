import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import Auth from "../../utils/auth";
import Layout from "../../components/Layout";
import ArrowPng from "../../assets/image/Arrow.png";
import FormAddCar from "../../container/AddCar/FormAddCar";

function AddCar(params) {
  return (
    <Layout>
      <div>
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
                      <h5 className="mt-2 mb-4 ps-3">CARS</h5>
                      <h6
                        className="pt-2 pb-2 ps-3 "
                        style={{ backgroundColor: "#CFD4ED", width: "100%" }}>
                        List Car
                      </h6>
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-4 mt-4">
                      <Breadcrumb>
                        <BreadcrumbItem href="/listcars">Cars</BreadcrumbItem>
                        <BreadcrumbItem href={"/listcars"}>
                          List Cars
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Add Car</BreadcrumbItem>
                      </Breadcrumb>
                    </div>
                    <div className="mb-4">
                      {/* <h1>Add Car Form</h1> */}
                      <FormAddCar />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default AddCar;
