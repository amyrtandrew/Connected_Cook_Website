import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div>
      <h1
        className="login-title"
        style={{
          color: "rgb(255 255 255 / 77%)",
          fontSize: "40px",
          position: "relative",
          display: "flex",
          marginTop: "5vh",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          paddingLeft: "12vw",
          paddingRight: "12vw",
          textAlign: "center",
          height: "10vh",
        }}
      >
        Welcome to Connected Cook, where you can explore for and store recipes!
      </h1>

      <div
        style={{
          marginTop: "10vh",
          paddingTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "9px",
          height: "55vh",
          width: "30vw",
          backgroundColor: "rgb(255 255 255 / 50%)",
          // alignContent: "center",
        }}
      >
        <h1
          className="login-message"
          style={{
            position: "relative",
            display: "flex",
            marginTop: "10px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px",
            fontSize: "25px",
          }}
        >
          Login
        </h1>
        <form
          className="login-form"
          onSubmit={(e) => {
            onLogin(e, {
              username: usernameValue,
              password: passwordValue,
            });
          }}
        >
          <input
            id="username"
            type="text"
            placeholder="username"
            required
            className="user-input"
            style={{
              borderRadius: "10px",
              width: "18vw",
              backgroundColor: "rgb(255 255 255 / 70%)",
            }}
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            required
            className="user-input"
            style={{
              borderRadius: "10px",
              width: "18vw",
              marginTop: "20px",
              backgroundColor: "rgb(255 255 255 / 70%)",
            }}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <button
            type="submit"
            className="login-btn"
            style={{
              backgroundColor: "royalblue",
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              display: "flex",
              marginTop: "10px",
              width: "18vw",
              textAlign: "center",
            }}
          >
            <p
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                display: "flex",
                fontSize: "17px",
              }}
            >
              Log In
            </p>
          </button>
        </form>
        <span
          style={{
            position: "relative",
            display: "flex",
            marginTop: "10px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "16px",
          }}
        >
          Don't have an account?
          <span style={{ textDecoration: "underline" }}>
            <Link to="/create-account"> Create Account</Link>
          </span>
        </span>
      </div>
    </div>
  );
}
