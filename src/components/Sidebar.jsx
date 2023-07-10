import logo from "../assets/image/Rectangle 63.png";
import iconHome from "../assets/image/HomeIcon.png";
import iconTruck from "../assets/image/fi_truck.png";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <aside
        className="d-block"
        style={{
          position: "fixed",
          background: "#0D28A6",
          top: 0,
          left: 0,
          bottom: 0,
          width: "80px",
        }}>
        <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
          <img src={logo} alt=" "></img>
        </div>
        <NavLink onClick={() => navigate("/")}>
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ color: "white" }}>
            <img src={iconHome} alt=" "></img>
          </div>
          <p style={{ color: "white" }}>Dashboard</p>
        </NavLink>
        <NavLink onClick={() => navigate("/listcars")}>
          <div className="d-flex justify-content-center align-items-center ">
            <img src={iconTruck} alt=" "></img>
          </div>
          <p style={{ color: "white", marginLeft: "7px" }}>List Cars</p>
        </NavLink>
      </aside>
    </div>
  );
}

export default Sidebar;
