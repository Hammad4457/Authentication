import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Reset() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function getPassword(e) {
    setPassword(e.target.value);
  }
  function getConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <form className="ForgetPage">
      <h1>Reset your Page</h1>
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={getPassword}
        required
      />{" "}
      <br /> <br />
      <input
        type="confirmPassword"
        placeholder="Confrim Password"
        value={confirmPassword}
        required
        onChange={getConfirmPassword}
      />
      <br />
      <br />
      <Link to={"/Login"}>
        <button>Update</button>
      </Link>
      <br />
    </form>
  );
}

export default Reset;
