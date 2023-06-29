import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import AddCar from './page/AddCar/index';
import EditCar from './page/EditCar/index';

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
    path: "/editcar",
    element: <EditCar />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
