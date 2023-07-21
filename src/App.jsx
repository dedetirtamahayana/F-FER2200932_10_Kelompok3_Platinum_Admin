import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
<<<<<<< HEAD
import DataTable from "./container/data-table/index";
=======
import Chart from "./page/Chart/Chart";
import DashboardPage from "./page/Dashboard/DashboardPage";
>>>>>>> f567410 (add chart)

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
  {
    path: "/datatable",
    element: <DataTable />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
