import Login from "./pages/Login";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Inventory from "./pages/Inventory";
import DashBoardData from "./pages/DashBoardData";
import { useAuthContext } from "./context/AuthContext";
import CreateRake from "./pages/CreateRake";

function App() {
  const { token } = useAuthContext();
  console.log(token);
  return (
    <div className="mainContainer">
      {!token ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashBoardData />} /> {/* /dashboard */}
            <Route path="coaches" element={<Rooms />} />{" "}
            <Route path="createrake" element={<CreateRake />} />{" "}
            {/* /dashboard/coaches */}
            <Route path="inventory" element={<Inventory />} />{" "}
            {/* /dashboard/inventory */}
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
