import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthcontext";
import GoogleButton from "react-google-button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp,  googleSignIn } = useUserAuth();
  let navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

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
    <>
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <div className="p-4 box" style={{ width: '400px' }}>
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
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
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>

   </>
  );
};

export default Signup;
