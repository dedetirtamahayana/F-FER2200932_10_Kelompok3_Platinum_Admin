import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/Login/Login";
import ListCarsPage from "./page/List Cars/listCarsPage";
import DashboardPage from "./page/Dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/listcars",
    element: <ListCarsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
