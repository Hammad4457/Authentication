import React, { useState } from "react";
import { Link } from "react-router-dom";
import NameSvg from "../svg Components/NameSvg";
import EmailSvg from "../svg Components/EmailSvg";
import PasswordSvg from "../svg Components/PasswordSvg";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  function getName(e) {
    setName(e.target.value);
  }
  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getPassword(e) {
    const newPassword = e.target.value;
    if (newPassword.lenght > 8) {
      setPassword(newPassword);
      setPasswordError(false);
    } else {
      setPassword("");
      setPasswordError(true);
    }
  }
  function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    }
    passwordField.type === "password";
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
        <h1 className="text text-center text-lg font-bold mt-36">
          Sign Up for an Account
        </h1>

        <div className="flex items-center justify-center ">
          <form>
            <br />
            <div className="relative">
              <div className="flex items-center">
                <div className="absolute left-0 flex items-center pl-3">
                  <NameSvg />
                </div>
                <input
                  className="pl-10 w-72 px-3 py-2 rounded border border-slate-300"
                  type="text"
                  placeholder="Enter Name"
                  onChange={getName}
                  required={true}
                />
              </div>
            </div>

            <br />
            <br />
            <div className="relative">
            <div className="flex items-center">
            <div className="absolute itmes-center pl-3 ">
              <EmailSvg />
            </div>
            <input
              className=" w-72 px-3 pl-10  py-2 rounded border border-slate-300"
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
                <div className="absolute items-center pl-3">
                <PasswordSvg />
                </div>
              
              <input
                className={`mt-0.1 w-72 pl-10 px-3  py-2 rounded border border-slate-300
                ${passwordError ? "border-red-500" : "border-slate-300"}`}
                type="password"
                placeholder="Enter Password"
                onChange={getPassword}
                onClick={togglePassword}
                required
              />
            </div>
            </div>

           
            {passwordError && (
              <p className="text-xs">Password must be 8 characters</p>
            )}
            <br />
            <br />
            <div className="flex">
              <div>
              <input type="checkbox" for="checkbox" />
              </div>
              <div className="flex">
              <text for="checkbox " className="text-xs px-1">By creating an account means you to the <b>Terms<br/> & Conditions</b> and out Privacy Policy
             & Conditions <br/> and our <b>Privacy Policy</b></text>
             </div>
             </div>
            <br />
            <br />
            <Link to="/Login">
              <button
                type="submit"
                className="bg-[#4BCBEB] px-2 py-2 w-72 rounded-2xl"
              >
                Sign Up
              </button>
            </Link>
            <br />
            <br />
            
              <text className="px-3">Already have an Account?</text>
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
