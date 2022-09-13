import React,{useState} from "react";

function Register({setLogged}) {
    const[name,setname]=useState("")
const[email,setemail]=useState("")
const[password,setpassword]=useState("")
function handlesubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/users",
    {
      method:"POST",headers:{"content-Type":"application/json"},
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    }
    )
    setname("")
    setemail("")
    setpassword("")
    e.target.reset("")
    setLogged(true)
  }
  return (
    <form className="regi" onSubmit={handlesubmit}>
      <div>
      <label>Enter your name </label>
      <input type="text" onChange={(e)=>{setname(e.target.value)}} required/>
      </div>
      <div>
      <label>Enter your email</label>
      <input type="email" onChange={(e)=>{setemail(e.target.value)}} required/>
      </div>
      <div>
      <label>Enter your password </label>
      <input type="text" onChange={(e)=>{setpassword(e.target.value)}} required/>
      </div>
      <input className="smt" type="submit" value="submit"/>
    </form>
  );
}
export default Register
