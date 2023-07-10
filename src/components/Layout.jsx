import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
