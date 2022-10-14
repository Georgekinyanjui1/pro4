import React, { useState } from "react";
import Register from "./Register";

function Login({ setuseremail, setuserpassword, handlesubmit,setLogged  }) {
const[signup,setsignup]=useState(false)
  return (
    signup?<Register setLogged={setLogged}/>:
    <>
    <h1 className="welcome">Welcome to Light Quote foundation</h1>
      <form className="form1" onSubmit={handlesubmit}>
        <h2>Do you have an account?</h2>
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
        <div className="coni1">
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
        </div>
        <button className="login-but">Login</button>

        <h2>To get an account please register</h2>
        
        <button className="reg" onClick={()=>{setsignup(true)}}>Register</button>
       
      </form>
    </>
  );
}
export default Login;
