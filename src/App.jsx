import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />

      {/* if logged in === true
      <HomePage/> */}
      {/* else {
        <LoginPage />
      } */}
    </div>
  );
}

export default App;
