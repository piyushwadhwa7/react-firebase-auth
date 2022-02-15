import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthcontext";

const Login = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

 

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
          <div className=" gap-2">
            <Button variant="primary" type="Submit">
              Continue With Google
            </Button>
          </div>
        
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;