import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="flex">
      <div className="w-1/2 h-full bg-[#4BCBEB]">
      <img className=" py-28  w-96  mx-auto max-w-full" src="src\assets\SignIn.jpg"></img>
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-center ">
          <form>
            <h1 className="text text-center text-lg font-bold mt-44">
              Sign In to your Account
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
              onChange={getEmail}
              required
            />
            <br />
            <br />

            <input
              className="mt-0.1 w-64 px-3 py-2 rounded border border-slate-300"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={getPassword}
              required
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
