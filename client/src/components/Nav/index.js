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

    <div className="d-flex justify-content-end">
      <Button onClick={handleLogout} href="/home" className="navbtn" id="logout"><span id="log">Log</span> <span id="out">Out</span></Button>
    </div> 
  
  : <div className="d-flex justify-content-end">
      <Button href="/login" className="navbtn" id="login"><span>Log In</span></Button>
      <Button href="/signup" className="navbtn" id="signup"><span>Sign Up</span></Button>
    </div>
  }


  return (
    <nav className="navbar navbar-dark">
      <a className="navbar-brand px-2 rounded" href="/">
        <span class="navspan">M</span>ost <span class="navspan">V</span>iral <span class="navspan">P</span>olitician
      </a>
      
    {render()}

    </nav>
  );
}

