import React, {useState} from "react"
import Signup from "./pages/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PolProfile from "./pages/PolProfile"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import Nav from "./components/Nav/index"
import Home from "./pages/Home" 
import LoginBtn from "./components/LoginBtn"

function App() {
  return (
    <div>
      <AuthProvider>
       <Nav/> 
      </AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />

              <PrivateRoute exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/polprofile" component={PolProfile} />
            </Switch>
          </AuthProvider>
        </Router>
    
    </Container>
    </div>
  ) 
}

export default App