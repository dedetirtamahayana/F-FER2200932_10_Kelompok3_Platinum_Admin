import { Button, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo2 from "../../src/assets/image/Rectangle 62.png";
import iconProfile from "../../src/assets/image/profile.png";
import hamburger from "../../src/assets/image/fi_menu.png";

function TopNavbar() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div style={{ marginLeft: "80px" }}>
      <Navbar
        style={{ background: "#FFFFFF" }}
        className="d-flex justify-content-between px-3 py-3">
        <div className="">
          <img src={logo2} alt="logo2" />
          <img
            src={hamburger}
            style={{ marginLeft: "100px" }}
            alt="toggleIcon"
          />
        </div>
        <Nav>
          <div className="d-flex pe-4">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ marginRight: "5px" }}
            />
            <Button
              variant="outline-primary"
              className="btn fw-bold"
              type="submit"
              style={{ color: "#0D28A6", borderColor: "#0D28A6" }}>
              Search
            </Button>
          </div>
          <div>
            <img className="pe-1" src={iconProfile} alt="" />
          </div>
          <NavDropdown title="Admin Binar" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
