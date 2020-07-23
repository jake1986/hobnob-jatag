import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import Logo from "../components/Logo";

const signupStyles = {
  maxWidth: "20rem",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Logo />
      <div style={signupStyles} className="Signup">
        <h4 className="signupLogo">Sign up to place your order.</h4>
        <p></p>
        <Form onSubmit={handleFormSubmit}>
          <InputGroup
            id="username"
            labelText="Username"
            placeholder="WinterIsComing"
            name="username"
            type="text"
            onChange={handleChange}
          />
          <InputGroup
            id="email"
            labelText="Email"
            placeholder="jon.snow@email.com"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <InputGroup
            id="pwd"
            labelText="Password"
            placeholder="p@ssw0Rd!"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </Form>
        <Link
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
          }}
          to="/login"
        >
          Go to Login
        </Link>
      </div>
    </>
  );
}

export default Signup;
