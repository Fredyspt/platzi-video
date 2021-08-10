import React from "react";
import { Link } from 'react-router-dom';

import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/images/google-logo.png';
import twitterIcon from '../assets/images/twitter-logo.png';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Login</h2>
      <form className="login__container--form">
        <input className="input-form" type="text" placeholder="Email" />
        <input className="input-form" type="password" placeholder="Password" />
        <button className="button">Login</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="box1" value="checkbox" />
            Remember me
          </label>
          <a href="/">Forget your password?</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" />
          Login with Google
        </div>
        <div>
          <img src={twitterIcon} alt="Twitter" />
          Login with Twitter
        </div>
      </section>
      <p className="login__container--register">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>
  </section>
);

export default Login;
