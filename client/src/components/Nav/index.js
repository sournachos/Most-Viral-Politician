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

   <div className="w-25 d-flex justify-content-end mt-1">
     <Button onClick={handleLogout} href="/home">Log Out</Button>
  </div> 
  
  : <div className="w-25 d-flex justify-content-end mt-1">
      <Button href="/login">Log In</Button>
      <Button href="/signup">Sign Up</Button>
    </div>
  }


  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        M<span>o</span>st V<span>i</span>r<span>a</span>l P<span>o</span>l<span>i</span>t<span>i</span>c<span>ia</span>n
      </a>
      
    {render()}

    </nav>
  );
}

