import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/Login/Login";
import ListCarsPage from "./page/List Cars/ListCarsPage";
import DashboardPage from "./page/Dashboard/DashboardPage";
import AddCarPage from "./page/AddCar";
import EditCarPage from "./page/EditCar";

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
    path: "/editcar",
    element: <EditCarPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
