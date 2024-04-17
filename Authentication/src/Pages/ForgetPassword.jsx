import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState();

  function getEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <form className="ForgetPage">
      <h1>Reset your Page</h1>
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

      <Link to={"/Reset"}>
        <button>Continue</button>
      </Link>
      <br />
      <Link to={"/Login"}>
        <p> Back to Sign.In</p>
      </Link>
    </form>
  );
}

export default ForgetPassword;
