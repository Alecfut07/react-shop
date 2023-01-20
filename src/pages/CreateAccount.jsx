import React from "react";
import "@styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div>
      <div>
        <h1 className="title">My account</h1>
        <form>
          <div>
            <label for="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              className="input input-name"
            />
            <label for="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="input input-email"
            />
            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
            <input
              type="submit"
              value="Create"
              className="primary-button login-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
