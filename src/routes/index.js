import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./page/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
