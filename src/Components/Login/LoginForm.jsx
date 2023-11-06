import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onLogin(e, {
          username: usernameValue,
          password: passwordValue,
        });
        console.log(usernameValue);
        console.log(passwordValue);
      }}
    >
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
      <button type="submit">Log In</button>
    </form>
  );
}
