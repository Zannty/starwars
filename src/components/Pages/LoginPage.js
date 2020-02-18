import React from "react";
import { Redirect } from "react-router-dom";
const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="text-center">
      <p>Login to secret page</p>
      <button className="btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
