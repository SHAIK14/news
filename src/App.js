import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Cricket from "./Components/pages/Cricket";
import Finance from "./Components/pages/Finance";
import Politics from "./Components/pages/Politics";
import Navbar from "./Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Cricket />,
      },
      {
        path: "/cricket",
        element: <Cricket />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
