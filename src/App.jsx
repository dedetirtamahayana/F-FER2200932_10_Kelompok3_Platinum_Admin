import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/Login/Login";
import ListCarsPage from "./page/List Cars/listCarsPage";
import DashboardPage from "./page/Dashboard/DashboardPage";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
