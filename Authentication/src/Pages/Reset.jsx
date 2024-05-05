import React, { useState } from "react";
import PasswordSvg from "../svg Components/PasswordSvg";
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
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 bg-[#4BCBEB]">
        <img
          className="py-28 w-96 mx-auto max-w-full"
          src="src\assets\ResetPassword.jpg"
          alt="Reset Password Image"
        ></img>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="flex items-center justify-center">
          <form className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <h1 className="font-bold text-center mr-[30%] mt-36">
              Reset your Password
            </h1>
            <p className="text-xs ml-[15%]  mt-1">
              To set a new password, please enter your new password below. Make
              sure it's secure, containing a combination of letters, numbers,
              and special characters.
            </p>
            <div className="relative mt-8  px-14">
              <div className="flex items-center">
                <div className="absolute items-center pl-3">
                  <PasswordSvg />
                </div>
                <input
                  className="w-72 pl-10 px-3 py-2 rounded border border-slate-300"
                  type="password"
                  placeholder="Your New Password"
                  onChange={getPassword}
                  required
                />
              </div>
            </div>

            <div className="relative mt-8  px-14">
              <div className="flex items-center">
                <div className="absolute items-center pl-3">
                  <PasswordSvg />
                </div>
                <input
                  className="w-72 pl-10 px-3 py-2 rounded border border-slate-300"
                  type="password"
                  placeholder="Confirm Your New Password"
                  onChange={getConfirmPassword}
                  required
                />
              </div>
            </div>

            <Link to={"/Login"}>
              <button className="bg-[#4BCBEB] ml-12 mt-12 px-2 py-2 w-72 rounded-2xl">
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
