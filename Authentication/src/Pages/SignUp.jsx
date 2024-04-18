import React, { useState } from "react";
import { Link } from "react-router-dom";


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
        
        <img className=" py-28  w-96  mx-auto max-w-full" src="src\assets\Signup.PNG"></img>
      </div>
      <div className="w-1/2  ">
        <h1 className="text text-center text-lg font-bold mt-36">
          Sign Up for an Account
        </h1>

        <div className="flex items-center justify-center ">
       
          <form>
            
            <br />

            <input
              className="mt-0.1 w-60 px-3 py-2 rounded border border-slate-300"
              type="text"
              placeholder="Enter Name"
              onChange={getName}
              required={true}
            />
            <br />
            <br />

            <input
              className="mt-0.1 w-60 px-3  py-2 rounded border border-slate-300"
              type="text"
              placeholder="Enter Email"
              onChange={getEmail}
              required
            />
            <br />
            <br />

            <input
              className={`mt-0.1 w-60 px-3  py-2 rounded border border-slate-300
              ${passwordError ? "border-red-500" : "border-slate-300"}`}
              type="password"
              placeholder="Enter Password"
              onChange={getPassword}
              onClick={togglePassword}
              required
            />
            {passwordError && (
              <p className="text-xs">Password must be 8 characters</p>
            )}
            <br />
            <br />

            <input type="checkbox" for="checkbox" />
            <label for="checkbox">Terms & Conditions</label>
            <br />
            <br />
            <Link to="/Login">
              <button type="submit" className="bg-[#4BCBEB] px-2 py-2 w-60 rounded-2xl">
                Sign Up
              </button>
            </Link>
            <br />
            <br />

            <Link to="/Login">
              <text>Already have an Account?</text>
              <button className="text-blue-800">Login</button>{" "}
            </Link>
            
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default SignUp;
