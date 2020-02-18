import React from "react";
import { Redirect } from "react-router-dom";
const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="text-center">
        <p>What do you need?</p>
        <img
          src="https://d.radikal.ru/d41/1909/cd/f166ebbe2bf3.jpg"
          alt="err img"
        />
      </div>
    );
  }
  return <Redirect to="/login" />;
};

export default SecretPage;
