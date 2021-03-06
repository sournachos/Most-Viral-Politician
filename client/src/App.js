import React, {useState} from "react"
import Signup from "./pages/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PolProfile from "./pages/PolProfile"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import Nav from "./components/Nav/index"
import Home from "./pages/Home" 
import LoginBtn from "./components/LoginBtn"
//import { Container } from "react-bootstrap"

const styles = {
  body: {
    margin: "0% 5%"
  }
  
}

function App() {
  return (
    <div>
      <AuthProvider>
       <Nav/> 
      </AuthProvider>
        <Router>
          <AuthProvider>
            
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              <div style={styles.body}>
                <PrivateRoute exact path={["/", "/home"]} component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/polprofile/:_id" component={PolProfile} />
              </div>
              </Switch>
            
          </AuthProvider>
        </Router>
      
    </div>
  ) 
}

export default App