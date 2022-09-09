import react from "react"


function Login({setuseremail,setuserpassword,handlesubmit,success}) {
    return(
      <>
  
        <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        <p className={success?"disabled":"abled"}>Invalid username or password</p>
        <input
        onChange={(e)=>{setuseremail(e.target.value)}}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
        onChange={(e)=>{setuserpassword(e.target.value)}}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
         
        />
        <button>
          Login
        </button>
      </form>
    </>
    )
     
    
}
export default Login