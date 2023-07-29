import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
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

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/politics" element={<Politics />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
