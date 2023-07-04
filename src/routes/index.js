import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./page/Login/Login";
<<<<<<< HEAD
import ListCarsPage from "../page/List Cars/listCars";
=======
>>>>>>> 0d129b14d4d024b09e03dc6fbc5085aaf8d06d0e

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
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
