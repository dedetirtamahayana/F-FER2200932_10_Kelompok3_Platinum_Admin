import logo from "../assets/image/Rectangle 63.png";
import iconHome from "../assets/image/home.png";
import iconTruck from "../assets/image/fi_truck.png";
import { useNavigate } from "react-router";
import "./Sidebar.css";

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

        <button className="homeButton" onClick={() => navigate("/")}>
          <img src={iconHome} alt=""></img>
          <p>Dashboard</p>
        </button>
        <button className="homeButton" onClick={() => navigate("/listcars")}>
          <img src={iconTruck} style={{ padding: "10px" }} alt=""></img>
          <p>List Cars</p>
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
