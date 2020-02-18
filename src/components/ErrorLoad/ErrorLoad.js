import React from "react";
import "./ErrorLoad.css";
import icon from "./droid.png";

const ErrorLoad = () => {
  return (
    <div className="er-load">
      Sorry, this information is being restored,
      <br /> you will see it soon.
      <img src={icon} height="70px" alt="Error img"></img>
    </div>
  );
};

export default ErrorLoad;
