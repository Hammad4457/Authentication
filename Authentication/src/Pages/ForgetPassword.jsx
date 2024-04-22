import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState();

  function getEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="flex ">
      <div className="w-1/2 h-full bg-[#4BCBEB]">
        <img
          className=" py-28  w-96  mx-auto max-w-full"
          src="src\assets\ForgotPassword.jpg"
        ></img>
      </div>

      <div className="w-1/2 h-full">
        <div className="flex items-center justify-center">
          <form>
            <h1 className="mt-44 text-center font-bold">Reset your Password</h1>

            <text className="text-xs mx-12">
              Enter the email address associated with your account <br />{" "}
            </text>
            <text className="text-xs mx-12">
              and we will send you a link to reset your password.
            </text>
            <br />
            <br />
            <input
              className="w-64 px-2 py-3 rounded border border-slate-300 mx-12 mt-1"
              type="text"
              placeholder="Enter UserName"
              value={email}
              onChange={getEmail}
              required
            />
            <br />
            <br />

            <Link to={"/Reset"}>
              <button className="bg-[#4BCBEB] mx-12 px-2 py-2 w-64 rounded-2xl">
                Continue
              </button>
            </Link>
            <br />
            <br />
            <Link to={"/Login"}>
              <text className="text-blue-800 px-32"> Back to Sign.In</text>
            </Link>

            <br />
            <br />
            <br />
            <br />

            <text className="text-xs px-24">
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

export default ForgetPassword;
