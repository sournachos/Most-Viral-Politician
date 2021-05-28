import React from "react";
import { Button } from "react-bootstrap"

function LoginBtn() {
    return (
        <>
        <div className="w-25 justify-content-end mt-1">
        <Button to="/login">Login</Button>
      </div>
      </>
    );
}

export default LoginBtn;