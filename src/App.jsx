import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import DataTable from "./container/data-table/index";

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
    path: "/datatable",
    element: <DataTable />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
