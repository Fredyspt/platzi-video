import React from "react";
import "../assets/styles/components/Header.scss";
import userIcon from "../assets/images/user-icon.png";
import platziVideoLogo from '../assets/images/logo-platzi-video-BW2.png'

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src={platziVideoLogo}
      alt="Platzi Video Logo"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User icon" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Log out</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
