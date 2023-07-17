import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";
import Dashboard from "./container/Dashboard/Dashboard";
import AddCar from './page/AddCar/index';
import EditCar from './page/EditCar/index';
import CarListPage from "./page/CarList/listCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addcar",
    element: <AddCar />,
  },
  {
    path: "/editcar/:id",
    element: <EditCar />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  
  {
    path: "/carlist",
    element: <CarListPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
