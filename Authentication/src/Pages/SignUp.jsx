import React, { useState } from "react";
import { Link } from "react-router-dom";


function SignUp(){

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    function getName(e){
      
      setName(e.target.value);
    }
    function getEmail(e){
     
      setEmail(e.target.value);
    }
    function getPassword(e){
      
      setPassword(e.target.value);
    }
    function togglePassword(){
      var passwordField= document.getElementById("password");
      if(passwordField.type==="password"){
        passwordField.type="text";
      }
      passwordField.type==="password"

    }
   
    return (
        
      <div className="flex h-screen">
        <div className="w-1/2 h-screen bg-[#4BCBEB]">
         <h1 className="text-center">Task List Manager</h1>
        </div>
        <div className="w-1/2  ">
          <h1 className="text text-center text-lg font-bold mt-44">Sign Up for an Account</h1>

          <div className="flex items-center justify-center ">
         
            <form >
              
              <br/>
              
              <input className="mt-0.1 w-60 px-3 py-2 rounded border border-slate-300" type='name' placeholder='Enter Name'  onChange={getName} required/><br/><br/>
              
              
              <input className='mt-0.1 w-60 px-3  py-2 rounded border border-slate-300' placeholder='Enter Email'  onChange={getEmail} required/><br/><br/>
              
              <input className='mt-0.1 w-60 px-3  py-2 rounded border border-slate-300' placeholder='Enter Password'  onChange={getPassword} onClick={togglePassword} required/>

              <p className="text-xs">Password must be 8 characters</p>
              
              <br/><br/>

              <input type="checkbox" for='checkbox'/>
              <label for='checkbox'>Terms & Conditions</label>
              <br/><br/>
              <Link to='/Login'><button className="bg-[#4BCBEB] px-2 py-2 w-60 rounded-2xl">Sign Up</button></Link><br/><br/>
             
              <Link to='/Signup' ><text >Already have an Account?</text><button className="text-blue-800">Login</button> </Link>
          </form>
        </div>
      </div>
    </div>
    )
}

export default SignUp;