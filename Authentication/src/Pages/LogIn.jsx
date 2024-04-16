import React from "react";
import { useState } from "react";

function LogIn(){

  
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

  function getPassword(e){
    e.preventDefault();
    setPassword(e.target.value);
  }

  function getEmail(e){
    
    setEmail(e.target.value);
  }

    return (
        <form className='SignUpPage'>
      <h1>Login Here</h1>
      <br/>
      <label for='username'>UserName: </label>
      <input type='username' placeholder='Enter UserName' value={email} required onChange={getEmail}/><br/><br/>

      <label for='password'>Password: </label>
      <input type='password' placeholder='Enter Password' value={password} required onChange={getPassword}/>

      <br/><br/>
      <button>Login</button>
      
    </form>
    )
}

export default LogIn;