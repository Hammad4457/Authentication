import React, { useState } from "react";
import EmailSvg from "../svg Components/EmailSvg";
import { Link, Navigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailExists,setEmailExists]=useState(false);

  function getEmail(e) {
    setEmail(e.target.value);
  }
  

  function checkUserExists(email) {
    return axios.get(`http://localhost:3000/api/users/${email}`)
        .then(response => {
            const answer = response.data;
            console.log(answer);
            setEmailExists(answer);
        })
        .catch(error => {
            console.error("Error checking user existence:", error);
            // You can handle errors here as needed
            throw error; // Rethrow the error to be handled by the caller
        });
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
            <h1 className="mt-36 text-center text-lg mr-40 font-bold">
              Reset your Password
            </h1>

            <p className="text-xs ml-6 mt-1">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>

            <div className="relative  mt-12 ml-6 ">
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

            
              <button className="bg-[#4BCBEB] mt-12 ml-6 px-2 py-2 w-72 rounded-2xl"
               onClick={()=>{
                if(emailExists){
                  Navigate("/Reset")
                }
              }}>
                Continue
              </button>
            

            <Link to={"/Login"}>
              <p className="text-blue-800 mt-8 ml-28">Back to Sign In</p>
            </Link>

            <p className="text-xs ml-20 mt-16">
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
