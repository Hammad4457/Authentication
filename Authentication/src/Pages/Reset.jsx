import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Reset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function getPassword(e) {
    setPassword(e.target.value);
  }
  function getConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <h1 className="text-center">Task List Manager</h1>
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-center">
          <form>
            <h1 className="font-bold text-center mt-44">Reset your Page</h1>
            <p className="text-xs px-6 mt-1">
              To set a new password, please enter your new password <br />{" "}
              below.Make sure it's secure,containing a combination of <br />
              letters,numbers, and special characters.
            </p>
            <br />
            <br />
            <input
              className="w-64 mx-12 py-1 px-2 border border-300-slate"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={getPassword}
              required
            />
            <br /> <br />
            <input
              className="w-64 mx-12 py-1 px-2 border border-300-slate"
              type="password"
              placeholder="Confrim Password"
              value={confirmPassword}
              onChange={getConfirmPassword}
              required
            />
            <br />
            <br />
            <br />
            <Link to={"/Login"}>
              <button className="w-64 mx-12 rounded bg-[#4BCBEB]">
                Update
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
