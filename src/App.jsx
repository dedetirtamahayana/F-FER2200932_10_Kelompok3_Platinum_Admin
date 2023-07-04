import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import ListCarsPage from "./page/List Cars/listCars";

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
    path: "/listcars",
    element: <ListCarsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
