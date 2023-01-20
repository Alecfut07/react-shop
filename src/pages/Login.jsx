import React, { useRef } from "react";
import "@styles/Login.scss";
import yardSaleLogo from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div class="login">
      <div class="form-container">
        <img src={yardSaleLogo} alt="logo" class="logo" />
        <form action="/" class="form" ref={form}>
          <label for="email" class="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            class="input input-email"
          />
          <label for="password" class="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            class="input input-password"
          />
          <button class="primary-button login-button" onClick={handleSubmit}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button class="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
