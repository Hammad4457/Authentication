import React from "react";
import PasswordSvg from "../svg Components/PasswordSvg";
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
    <div className="flex h-full">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className=" py-28  w-96  mx-auto max-w-full"
          src="src\assets\ResetPassword.jpg"
        ></img>
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-center">
          <form>
            <h1 className="font-bold text-center mt-44">Reset your Page</h1>
            <p className="text-xs px-16 mt-1">
              To set a new password, please enter your new password <br />{" "}
              below.Make sure it's secure,containing a combination of <br />
              letters,numbers, and special characters.
            </p>
            <br />
            <br />
            <div className="relative">
              <div className="flex items-center px-14">
                <div className="absolute items-center pl-3">
                  <PasswordSvg />
                </div>

                <input
                  className={`mt-0.1 w-72 pl-10 px-3  py-2 rounded border border-slate-300`}
                  type="password"
                  placeholder="Your New Password"
                  onChange={getPassword}
                  required
                />
              </div>
            </div>
            <br /> <br />
            <div className="relative">
              <div className="flex items-center px-14">
                <div className="absolute items-center pl-3">
                  <PasswordSvg />
                </div>

                <input
                  className={`mt-0.1 w-72 pl-10 px-3  py-2 rounded border border-slate-300`}
                  type="password"
                  placeholder="Confirm Your New Password"
                  onChange={getPassword}
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <Link to={"/Login"}>
              <button className="bg-[#4BCBEB] mx-12 px-2 py-2 w-72 rounded-2xl">
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
