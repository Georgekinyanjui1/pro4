import React, { useState } from "react";
import Register from "./Register";

function Login({ setuseremail, setuserpassword, handlesubmit,setLogged  }) {
const[signup,setsignup]=useState(false)
  return (
    signup?<Register setLogged={setLogged}/>:
    <>
      <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        
        <input 
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => {
            setuserpassword(e.target.value);
          }}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <button>Login</button>
      </form>
      <button className="reg" onClick={()=>{setsignup(true)}}>Register</button>
  
    </>
  );
}
export default Login;
