import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
<<<<<<< HEAD
import ListCarsPage from "./page/List Cars/listCars";
=======
>>>>>>> 0d129b14d4d024b09e03dc6fbc5085aaf8d06d0e

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
<<<<<<< HEAD
  {
    path: "/listcars",
    element: <ListCarsPage />,
  },
=======
>>>>>>> 0d129b14d4d024b09e03dc6fbc5085aaf8d06d0e
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
