import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { registerRequest } from "../actions";

import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Register</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input-form"
            type="text"
            placeholder="Name"
            onChange={handleInput}
          />
          <input
            name="email"
            className="input-form"
            type="text"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input-form"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="button">Register</button>
        </form>
        <Link to="/">Sign in</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);
