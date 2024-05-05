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
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#4BCBEB] md:h-screen">
        <img
          className="py-28 w-96 mx-auto"
          src="src\assets\Signup.PNG"
          alt="Signup Image"
        ></img>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-center items-center justify-center text-lg  font-bold mr-40 mt-32">
          Sign Up for an Account
        </h1>

        <div className="flex justify-center">
          <form
            onSubmit={handelSubmit}
            className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
          >
            <div className="relative">
              <div className="flex mt-8 items-center">
                <div className="absolute left-0  pl-3">
                  <NameSvg />
                </div>
                <input
                  className="pl-10 w-72 px-3 py-2 ml-2 rounded border border-slate-300"
                  type="text"
                  placeholder="Enter Name"
                  onChange={getName}
                  required={true}
                />
              </div>
            </div>

            <div>
              <div className="flex mt-6 items-center">
                <div className="absolute  pl-3 ">
                  <EmailSvg />
                </div>
                <input
                  className="w-72 px-3 pl-10 ml-2 py-2 rounded border border-slate-300"
                  type="email"
                  placeholder="Enter Email"
                  onChange={getEmail}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex mt-6 items-center">
                <div className="absolute  pl-3">
                  <PasswordSvg />
                </div>

                <input
                  className="w-72 pl-10 px-3 ml-2 py-2 rounded border border-slate-300"
                  type="password"
                  placeholder="Enter Password"
                  onChange={getPassword}
                  required
                />
              </div>
            </div>

            <div className="flex mt-10 ml-2 items-center">
              <input type="checkbox" />
              <p className="text-xs px-1">
                By creating an account means you agree to the
                <b>Terms & Conditions</b> and our <b>Privacy Policy</b>.
              </p>
            </div>

            <button className="bg-[#4BCBEB] ml-2 mt-8 px-2 py-2 w-72 rounded-2xl">
              Sign Up
            </button>

            <p className="ml-8 mt-4  px-1">
              Already have an Account?
              <Link to="/Login">
                <button className="text-blue-800">Login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
