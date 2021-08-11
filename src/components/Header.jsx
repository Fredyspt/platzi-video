import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";

import "../assets/styles/components/Header.scss";
import userIcon from "../assets/images/user-icon.png";
import platziVideoLogo from "../assets/images/logo-platzi-video-BW2.png";

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
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
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User icon" />
          )}

          <p>Profile</p>
        </div>
        <ul>
          {hasUser ? (
            <React.Fragment>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Log out
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
