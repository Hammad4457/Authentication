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
    <div className="flex">
      <div className="w-1/2 h-screen bg-[#4BCBEB]">
        <h1 className="text-center">Task List Manger</h1>
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-center ">
          <form>
            <h1 className="text text-center text-lg font-bold mt-44">
              Login Here
            </h1>
            <p className="text-xs text-center mt-2">
              Welcome back! please enter your detail
            </p>
            <br />

            <input
              className="mt-0.1 w-64 px-3 py-2 rounded border border-slate-300"
              type="text"
              placeholder="Enter UserName"
              value={email}
              required
              onChange={getEmail}
            />
            <br />
            <br />

            <input
              className="mt-0.1 w-64 px-3 py-2 rounded border border-slate-300"
              type="password"
              placeholder="Enter Password"
              value={password}
              required
              onChange={getPassword}
            />
            <br />
            <br />

            <input type="checkbox" for="checkbox" />
            <text className="text-xs  font-bold" for="checkbox">
              Remember me{" "}
              <Link to={"/Forget"}>
                <button className="text-blue-800 text-xs mx-5 ">
                  Forget Password?
                </button>
              </Link>
            </text>

            <br />
            <br />
            <Link to={"/Dashboard"}>
              <button className="bg-[#4BCBEB] px-2 py-2 w-64 rounded-2xl">
                Login
              </button>
            </Link>
            <br />
            <br />

            <text className="text-xs px-12">
              Don't have an Account?
              <Link to={"/"}>
                <button className="text-blue-900">SignUp</button>
              </Link>
            </text>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
