import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function getPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <form className="SignUpPage">
      <h1>Login Here</h1>
      <p>Welcome back! please enter your detail</p>
      <br />
      <label for="username">UserName: </label>
      <input
        type="username"
        placeholder="Enter UserName"
        value={email}
        required
        onChange={getEmail}
      />
      <br />
      <br />

      <label for="password">Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        required
        onChange={getPassword}
      />
      <br />
      <br />

      <input type="checkbox" for="checkbox" />
      <label for="checkbox">Remember me </label>
      <Link to={"/Forget"}>
        <text>Forget Password?</text>
      </Link>

      <br />
      <br />
      <button>Login</button>
    </form>
  );
}

export default LogIn;
