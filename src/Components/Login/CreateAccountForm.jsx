import { useState } from "react";

const CreateAccountForm = ({ onLogin }) => {
  const [fnameValue, setFnameValue] = useState("");
  const [lnameValue, setLnameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onLogin(e, {
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
        required
        onChange={(e) => setFnameValue(e.target.value)}
      />

      <label htmlFor="lname">Last Name:</label>
      <input
        name="lname"
        id="lname"
        type="text"
        required
        onChange={(e) => setLnameValue(e.target.value)}
      />
      <label htmlFor="username">Username:</label>
      <input
        name="username"
        id="username"
        type="text"
        required
        onChange={(e) => setUsernameValue(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        required
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
