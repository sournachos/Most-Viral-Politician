import React from "react";
import "./style.css";
import { Button } from "react-bootstrap"

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        M<span>o</span>st V<span>i</span>r<span>a</span>l P<span>o</span>l<span>i</span>t<span>i</span>c<span>ia</span>n
      </a>
      <div className="w-25 justify-content-end mt-1">
        <Button href="/login">Log In</Button>
        <Button href="/signup">Sign Up</Button>
      </div>
    </nav>
  );
}

