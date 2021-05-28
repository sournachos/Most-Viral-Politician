import React, {useState} from "react"
import Signup from "./pages/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
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
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </div>
  ) 
}

export default App