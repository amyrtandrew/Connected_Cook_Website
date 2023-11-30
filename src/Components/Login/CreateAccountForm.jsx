import { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccountForm = ({ onCreateAccount }) => {
  const [fnameValue, setFnameValue] = useState("");
  const [lnameValue, setLnameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div>
      <h1
        className="login-title"
        style={{
          color: "white",
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
        Create an account & get cookin'!
      </h1>
      <div
        style={{
          backgroundColor: "white",
          marginTop: "10vh",
          paddingTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "9px",
          height: "55vh",
          width: "30vw",
          // alignContent: "center",
        }}
      >
        <form
          className="create-account-form"
          onSubmit={(e) => {
            onCreateAccount(e, {
              fname: fnameValue,
              lname: lnameValue,
              username: usernameValue,
              password: passwordValue,
            });
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
            }}
          >
            Create Account
          </h1>
          <input
            name="fname"
            id="fname"
            type="text"
            placeholder="first name"
            style={{ borderRadius: "10px", width: "18vw", marginTop: "20px" }}
            required
            onChange={(e) => setFnameValue(e.target.value)}
          />
          <input
            name="lname"
            id="lname"
            type="text"
            placeholder="last name"
            style={{ borderRadius: "10px", width: "18vw", marginTop: "20px" }}
            required
            onChange={(e) => setLnameValue(e.target.value)}
          />
          <input
            name="username"
            id="username"
            type="text"
            placeholder="username"
            style={{ borderRadius: "10px", width: "18vw", marginTop: "20px" }}
            required
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            style={{ borderRadius: "10px", width: "18vw", marginTop: "20px" }}
            required
            onChange={(e) => setPasswordValue(e.target.value)}
          />

          <button
            type="submit"
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
            Create Account
          </button>
        </form>
      </div>
      <div className="login-link" style={{ marginTop: "2vh" }}>
        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "underline",
          }}
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountForm;
