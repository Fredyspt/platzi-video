import React from "react";
import { Link } from 'react-router-dom';

import "../assets/styles/components/Header.scss";
import userIcon from "../assets/images/user-icon.png";
import platziVideoLogo from '../assets/images/logo-platzi-video-BW2.png'

const Header = () => (
  <header className="header">
    <Link to="/">
      <img
        className="header__img"
        src={platziVideoLogo}
        alt="Platzi Video Logo"
      />
    </Link>
    
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User icon" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <Link to="/login">Account</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
