import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "60px",
        marginTop: "15vh",
        marginLeft: "25vw",
        marginRight: "25vw",
        borderRadius: "10px",
        height: "45vh",
        // alignContent: "center",
      }}
    >
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
          style={{ borderRadius: "10px", width: "18vw" }}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
          className="user-input"
          style={{ borderRadius: "10px", width: "18vw", marginTop: "20px" }}
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
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>Log In</p>
        </button>
      </form>
      <span
        style={{
          position: "relative",
          display: "flex",
          width: "fit-content",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
        }}
      >
        Don't have an account?{" "}
        <span style={{ textDecoration: "underline" }}>
          <Link to="/create-account">Create Account</Link>
        </span>
      </span>
    </div>
  );
}
