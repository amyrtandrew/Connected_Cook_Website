import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userId);
  const sessionCheck = async () => {
    await axios.get("/api/session-check").then((res) => {
      if (res.data.user) {
        dispatch({
          type: "SET_USER_ID",
          payload: res.data.user,
        });
        // console.log(res.data.user);
      } else {
        console.log(res.data);
      }
    });
  };

  useEffect(() => {
    sessionCheck();
  }, []);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
