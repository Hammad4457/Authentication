import React, { useState } from "react";
import { Link } from "react-router-dom";
import NameSvg from "../svg Components/NameSvg";
import EmailSvg from "../svg Components/EmailSvg";
import PasswordSvg from "../svg Components/PasswordSvg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function getName(e) {
    setName(e.target.value);
  }
  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getPassword(e) {
    setPassword(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/users/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex h-full">
      <div className="w-1/2 h-full bg-[#4BCBEB]">
        <img
          className=" py-28  w-96  mx-auto "
          src="src\assets\Signup.PNG"
        ></img>
      </div>
      <div className="w-1/2  ">
        <h1 className="text-center items-center justify-center text-lg font-bold mr-4 mt-32">
          Sign Up for an Account
        </h1>

        <div className="flex justify-center  ">
          <form onSubmit={handelSubmit}>
            <br />
            <div className="relative ">
              <div className="flex items-center">
                <div className="absolute left-0  pl-3">
                  <NameSvg />
                </div>
                <input
                  className="pl-10 w-[72] px-3 py-2 ml-2 rounded border border-slate-300"
                  type="text"
                  placeholder="Enter Name"
                  onChange={getName}
                  required={true}
                />
              </div>
            </div>

            <br />
            <br />
            <div>
              <div className="flex items-center">
                <div className="absolute  pl-3 ">
                  <EmailSvg />
                </div>
                <input
                  className=" w-[72] px-3 pl-10 ml-2 py-2 rounded border border-slate-300"
                  type="text"
                  placeholder="Enter Email"
                  onChange={getEmail}
                  required
                />
              </div>
            </div>

            <br />
            <br />

            <div className="relative">
              <div className="flex items-center">
                <div className="absolute  pl-3">
                  <PasswordSvg />
                </div>

                <input
                  className="mt-0.1 w-[72] pl-10 px-3 ml-2 py-2 rounded border border-slate-300"
                  type="password"
                  placeholder="Enter Password"
                  onChange={getPassword}
                  required
                />
              </div>
            </div>

            <br />
            <br />
            <div className="flex">
              <div>
                <input type="checkbox" />
              </div>
              <div className="flex">
                <text className="text-xs px-1">
                  By creating an account means you to the{" "}
                  <b>
                    Terms
                    <br /> & Conditions
                  </b>{" "}
                  and out Privacy Policy & Conditions <br /> and our{" "}
                  <b>Privacy Policy</b>
                </text>
              </div>
            </div>
            <br />
            <br />

            <button
              type="submit"
              className="bg-[#4BCBEB] px-2 py-2 w-60 rounded-2xl"
            >
              Sign Up
            </button>

            <br />
            <br />

            <text className="ml-4 px-1">Already have an Account?</text>
            <Link to="/Login">
              <button className="text-blue-800">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
