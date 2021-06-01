import React, {useState} from "react";
import "./style.css";
import { Button } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory} from "react-router-dom"


export default function Nav() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/home")
    } catch {
      setError("Failed to log out")
    }
  }

  const render =() => {
    return currentUser ?

   <div className="w-25 d-flex justify-content-end">
     <Button onClick={handleLogout} href="/home" className="navbtn" id="logout">Log <span>Out</span></Button>
  </div> 
  
  : <div className="w-25 d-flex justify-content-end">
      <Button href="/login" className="navbtn" id="login">Log In</Button>
      <Button href="/signup" className="navbtn" id="signup">Sign Up</Button>
    </div>
  }


  return (
    <nav className="navbar navbar-dark">
      <a className="navbar-brand" href="/">
        <span class="navspan">M</span>ost <span class="navspan">V</span>iral <span class="navspan">P</span>olitician
      </a>
      
    {render()}

    </nav>
  );
}

