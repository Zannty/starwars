import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark Navigation">
      <Link to="/" className="navbar-brand Navigation">
        Star DB
      </Link>

      <div className="collapse navbar-collapse ">
        <ul className="navbar-nav mr-auto item">
          <li className="nav-item item">
            <Link className="nav-link" to="/people/">
              People
            </Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link" to="/starships/">
              Starships
            </Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link" to="/planets/">
              Planets
            </Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link" to="/secret">
              Secret
            </Link>
          </li>
        </ul>
      </div>
      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        ChangeService
      </button>
    </div>
  );
};
export default Header;
