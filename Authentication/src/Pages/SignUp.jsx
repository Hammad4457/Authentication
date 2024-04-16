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
        <form className='SignUpPage'>
      <h1>Register Here</h1>
      <br/>
      <label for='name'>Name: </label>
      <input type='name' placeholder='Enter Name'  onChange={getName} required/><br/><br/>
      
      <label for='email'>Email: </label>
      <input type='email' placeholder='Enter Email'  onChange={getEmail} required/><br/><br/>
      <label for='password'>Password: </label>
      <input id='password' placeholder='Enter Password'  onChange={getPassword} onClick={togglePassword} required/>
      
      <br/><br/>

      <input type="checkbox" for='checkbox'/>
      <label for='checkbox'>By creating an account means you agree <br/>to the Terms & conditions and our Privacy Policy</label>
      <br/><br/>
      <Link to='/Login'><button >Sign Up</button></Link>
      <Link to='/Login'><button >Already have Account</button> </Link>
    </form>
    )
}

export default SignUp;