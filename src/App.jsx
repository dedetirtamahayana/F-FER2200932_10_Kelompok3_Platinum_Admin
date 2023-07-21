import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";

import Chart from "./page/Chart/Chart";
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
    path: "/chart",
    element: <Chart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
