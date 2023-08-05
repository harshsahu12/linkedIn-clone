import React, { useState } from "react";
import "./authForm.scss";
import { Google } from '@mui/icons-material'

const Form = ({ signIn, setSignIn }) => {
  // const [signIn, setSignIn] = useState(false);

  return (
    <div className="form">
      <h1>
        <span>Welcome to your</span>
        <span>professional community</span>
      </h1>

      {signIn ? (
        <form className="login_form">
          <div className="input_div">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="input_div">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className="input_checkbox">
            <span>Student</span>
            <label className="label">
              <div className="toggle">
                <input className="toggle-state" type="checkbox" name="check" value="check" />
                <div className="indicator"></div>
              </div>

            </label>
          </div>
          <button className="login_btn" type="submit">
            Agree & join
          </button>

          <div className="line">
            <hr />
            or
            <hr />
          </div>
          <button className="register_btn" onClick={(e) => e.preventDefault()}>
            <Google />
          </button>
        </form>
      ) : (
        <form className="login_form">
          <div className="input_div">
            <label htmlFor="phone">Email</label>
            <input type="tel" id="phone" />
          </div>
          <div className="input_div">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className="login_btn" type="submit">
            Sign in
          </button>

          <div className="line">
            <hr />
            or
            <hr />
          </div>
          <button className="register_btn" onClick={(e) => e.preventDefault(setSignIn(!signIn))}>
            New to LinkedIn? Join now
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
