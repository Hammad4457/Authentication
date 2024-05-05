import React, { useState } from "react";
import EmailSvg from "../svg Components/EmailSvg";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  function getEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="py-28 w-96 mx-auto max-w-full"
          src="src\assets\ForgotPassword.jpg"
          alt="Forgot Password Image"
        ></img>
      </div>

      <div className="w-full sm:w-1/2 h-full">
        <div className="flex items-center justify-center">
          <form className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <h1 className="mt-32 text-center text-lg mr-32 font-bold">
              Reset your Password
            </h1>

            <p className="text-xs ml-10 mt-1">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>

            <div className="relative  mt-12 ml-8 ">
              <div className="flex  items-center">
                <div className="absolute  pl-3">
                  <EmailSvg />
                </div>
                <input
                  className="w-72 px-3  pl-10 py-2 rounded border border-slate-300"
                  type="text"
                  placeholder="Enter Email"
                  onChange={getEmail}
                  required
                />
              </div>
            </div>

            <Link to={"/Reset"}>
              <button className="bg-[#4BCBEB] mt-12 ml-8 px-2 py-2 w-72 rounded-2xl">
                Continue
              </button>
            </Link>

            <Link to={"/Login"}>
              <p className="text-blue-800 mt-8 ml-32">Back to Sign In</p>
            </Link>

            <p className="text-xs ml-24 mt-16">
              Don't have an Account?{" "}
              <Link to={"/"}>
                <button className="text-blue-800">
                  <b>SignUp</b>
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
