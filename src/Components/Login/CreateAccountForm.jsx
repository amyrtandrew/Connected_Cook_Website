import { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccountForm = ({ onCreateAccount }) => {
  const [fnameValue, setFnameValue] = useState("");
  const [lnameValue, setLnameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div>
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
        <label htmlFor="fname">First Name:</label>
        <input
          name="fname"
          id="fname"
          type="text"
          placeholder="first name"
          required
          onChange={(e) => setFnameValue(e.target.value)}
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          name="lname"
          id="lname"
          type="text"
          placeholder="last name"
          required
          onChange={(e) => setLnameValue(e.target.value)}
        />
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="username"
          required
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button type="submit">Create Account</button>
      </form>
      <div className="login-link">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default CreateAccountForm;
