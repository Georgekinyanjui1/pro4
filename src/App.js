import "./App.css";
import Nav from "./Nav";
import Head from "./Head";
import Section from "./Section";
import Quiz from "./Quiz";
import Footer from "./Footer";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
function App() {
 const [logged,setLogged]= useState(false)
 const [useremail,setuseremail]=useState("")
 const [userpassword,setuserpassword]=useState("")
 const [users,setusers]=useState([])
 const [ success,setsuccess]=useState(true)

 useEffect(()=>{
  fetch("https://intense-mesa-32821.herokuapp.com/users")
  .then(res=>res.json())
  .then(data=>setusers(data))
},[])

 function handlesubmit(e){
 e.preventDefault()

 users.filter((user)=>{
  if(user.email ===useremail && user.password===userpassword){
    setLogged(true)
    setuseremail("")
    setuserpassword("")
  } else{
   setuseremail("")
   setuserpassword("")
   setsuccess(false)
   e.target.reset()
  }
 return true
  
  
 })
 }

  return (
    logged ?
    <div className="app-cont">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Head />} />
          <Route exact path="/section" element={<Section />} />
          <Route exact path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>: <Login setuseremail={setuseremail} setuserpassword={setuserpassword} handlesubmit={handlesubmit} setLogged={setLogged}/>

  );
}
export default App;
