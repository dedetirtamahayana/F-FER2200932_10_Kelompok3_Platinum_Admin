import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavItem,
} from "react-bootstrap";
import iconSearch from "../../assets/image/fi_search.svg";
import iconDropdown from "../../assets/image/chevron-down.svg";
import iconDashboard from "../../assets/image/fi_home.svg";
import iconCars from "../../assets/image/fi_truck.svg";
import classes from "./Navbar.module.css";

const NavbarAdmin = ({ currentPage }) => {
  const navbarRef = useRef();
  const [navPanelClass, setNavPanelClass] = useState("");
  const [navMenuClass, setNavMenuClass] = useState("");

  const navigate = useNavigate();
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
 

  return (
    <>
      <div style={{width: isOpen ? "300px" : "0px"}}
        className={`bg-white navigation-panel position-absolute h-100 ${classes.navPanelClass} ${navPanelClass}`}>
        {currentPage === "dashboard" && (
          <div className="dashboard-menu w-100 flex-column">
            <p 
            style={{display: isOpen ? "block" : "none"}}
            className={`w-100 ps-4 pe-3 ${classes.titleDashboard}`}>
              DASHBOARD
            </p>
            <ul className={`p-0 ${classes.listDashboard}`}>
              <li
                style={{display: isOpen ? "block" : "none"}}
                className={`ps-4 pe-3 ${classes.listNameDashboard}`}>
                Dashboard
              </li>
            </ul>
          </div>
        )}
        {currentPage === "view-car" && (
          <div className="cars-menu w-100 flex-column">
            <p 
             style={{display: isOpen ? "block" : "none"}}
             className={`w-100 ps-4 pe-3 ${classes.titleCars}`}>CARS</p>
            <ul className={`p-0 ${classes.listCars}`}>
              <li
               style={{display: isOpen ? "block" : "none"}}
                className={`ps-4 pe-3 ${classes.listNameCars}`}>List Car</li>
            </ul>
          </div>
        )}
      </div>
      <Nav
        className={`navigation-menu position-absolute flex-column ${classes.navMenuClass} ${navMenuClass}`}>
        <Nav.Link
          className={`${
            classes.navigationTab
          } w-100 d-flex flex-column justify-content-center align-items-center text-center'}`}
          style={{ height: "64px" }}
          onClick={() => navigate('/dashboard')}>
          <img src={iconDashboard} alt="dashboard" />
          <p className={`m-0 text-white ${classes.navTitle}`}>Dashboard</p>
        </Nav.Link>
        <Nav.Link
          className={'navigation-tab w-100 d-flex flex-column justify-content-center align-items-center text-center'}
          style={{ height: "64px" }}
          onClick={() => navigate('/carlist')}>
          <img src={iconCars} alt="cars" />
          <p className={`m-0 text-white ${classes.navTitle}`}>Cars</p>
        </Nav.Link>
      </Nav>
      <Navbar className={`bg-white p-0 ${classes.mainNavbar}`} ref={navbarRef}>
        <Container
          fluid
          className="h-100 p-0 d-flex justify-content-between align-items-center">
          <Col xs="auto" className={`h-100 d-flex ${classes.colNav}`}>
            <Button
              aria-label="Navigation Menu"
              className={`menu-button d-flex justify-content-center align-items-center position-relative ${classes.btnNavSideBar}`}
              >
              <div className={classes.iconSideNav} />
            </Button>
            <div
              className={`h-100 w-100 d-flex align-items-center px-4 ${classes.spaceNavTop}`}>
              <div className={classes.iconTopNav} />
            </div>
          </Col>
          <Col className="h-100 d-flex justify-content-between">
            <div
              className={`h-100 w-100 d-flex justify-content-center align-items-center ${classes.containerBurgerButton}`}>
              <Button onClick={toggle}
                className={`bg-white p-1 d-flex flex-column border-0 ${classes.btnBurgerButton}`}>
                <span className={`bg-dark ${classes.burgerButton}`} />
                <span className={`bg-dark ${classes.burgerButton}`} />
                <span className={`bg-dark ${classes.burgerButton}`} />
              </Button>
            </div>
            <div className="d-flex h-100">
              <Form className="d-none d-md-flex align-items-center pe-3">
                <fieldset className="position-relative d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={`formNavbar ${classes.formNavbar}`}
                  />
                  <img
                    src={iconSearch}
                    aria-hidden="true"
                    alt="search"
                    className={classes.iconSearch}
                  />
                  <Button className={`fw-bold ${classes.btnNavbarSearch}`}>
                    Search
                  </Button>
                </fieldset>
              </Form>
              <div
                className={`h-100 w-100 pe-3 d-flex justify-content-center align-items-center ${classes.containerProfile}`}>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle className="bg-white border-0 d-flex align-items-center admin-menu">
                    <div
                      className={`rounded-circle d-flex justify-content-center align-items-center ${classes.ImageProfileNavbar}`}>
                      R
                    </div>
                    <div className={`px-2 text-dark ${classes.profileNavbar}`}>
                      Admin Binar
                    </div>
                    <img
                      src={iconDropdown}
                      aria-hidden="true"
                      alt="icon-navbar"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      Log out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarAdmin;
