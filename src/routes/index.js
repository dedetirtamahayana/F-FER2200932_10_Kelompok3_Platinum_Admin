import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./page/Login/Login";
import ListCarsPage from "../page/List Cars/listCarsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
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
