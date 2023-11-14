import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
