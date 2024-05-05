import React, { useState } from "react";
import EmailSvg from "../svg Components/EmailSvg";
import PasswordSvg from "../svg Components/PasswordSvg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function getPassword(e) {
    setPassword(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/login", { email, password })
      .then((result) => {
        navigate("/dashboard");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="py-28 w-96 mx-auto max-w-full"
          src="src\assets\SignIn.jpg"
          alt="Sign In Image"
        ></img>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="flex items-center justify-center">
          <form
            onSubmit={onSubmit}
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          >
            <h1 className="text text-center mr-16 text-lg font-bold mr-[44%] mt-36">
              Sign In to your Account
            </h1>
            <p className="text-xs text-center mt-1 mr-40 ">
              Welcome back! please enter your detail
            </p>
            <br />

            <div className="relative mt-2">
              <div className="flex items-center">
                <div className="absolute items-center pl-3 ">
                  <EmailSvg />
                </div>
                <input
                  className="w-72 px-3 pl-10 py-2 rounded border border-slate-300"
                  type="text"
                  placeholder="Enter Email"
                  onChange={getEmail}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex mt-8 items-center">
                <div className="absolute items-center pl-3">
                  <PasswordSvg />
                </div>

                <input
                  className="w-72 pl-10 px-3 py-2 rounded border border-slate-300"
                  type="password"
                  placeholder="Enter Password"
                  onChange={getPassword}
                  required
                />
              </div>
            </div>

            <div className="flex mt-6">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="text-xs ml-1 font-bold">
                Remember me{" "}
                <Link to={"/Forget"}>
                  <button className="text-blue-800 text-xs ml-14">
                    Forget Password?
                  </button>
                </Link>
              </label>
            </div>

            <button className="bg-[#4BCBEB] mt-8 px-2 py-2 w-72 rounded-2xl">
              Sign In
            </button>

            <p className="text-xs mt-8 px-12">
              Don't have an Account?{" "}
              <Link to={"/"}>
                <button className="text-blue-800">
                  <b>Sign Up</b>
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
