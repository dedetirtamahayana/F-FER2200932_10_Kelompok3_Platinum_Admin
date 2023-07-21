import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/Login/Login";
import ListCarsPage from "./page/List Cars/listCarsPage";
import DashboardPage from "./page/Dashboard/DashboardPage";
import AddCarPage from "./page/AddCar";
import EditCarPage from "./page/EditCar";
import Chart from "./page/Chart/Chart";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/listcars",
    element: <ListCarsPage />,
  },
  {
    path: "/addcar",
    element: <AddCarPage />,
  },
  {
    path: "/editcar/:id",
    element: <EditCarPage />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
