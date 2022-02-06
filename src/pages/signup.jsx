import React, { Component, useState } from "react";
import "../css/signup.scss";
import bg from "../assets/login-bg.jpg";
import { Link } from "react-router-dom";

function SignupHeader() {
  return (
    <>
      <img src={bg} alt="background-image" class="bg" />
     
          <Link to="/" className="logo">Home</Link>
    </>
  );
}

function TextBox() {
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div class="text-box">
      <>
        <h2>Why Choose Us?</h2>
        <p>
          <i className="fa fa-check"></i>&nbsp;Fast and reliable
        </p>
        <p>
          <i className="fa fa-check"></i>&nbsp;Updated Content
        </p>
        <p>
          <i className="fa fa-check"></i>&nbsp;Best Support
        </p>
      </>
    </div>
  );
}

function SignupForm() {
  return (
    <div className="sign-container">
      <form
        action="#none"
        method="POST"
        id="form"
        encType="multipart/form-data"
      >
        <h2 className="form-title">Sign Up</h2>

        <div className="input-div ">
          <div className="i ">
            <i className="fas fa-user "></i>
          </div>
          <div className="">
            <input
              type="text"
              name="firstName"
              id="user-firstname"
              className="input"
              required
              placeholder="First Name"
              minlength="3"
              data-message="firstname-message"
            />
          </div>
          <div className="message-div" id="firstname-message">
            <b>Must:</b>
            <ul>
              <li className="invalid" id="name-valid">
                Minimum 3 characters and only letters
              </li>
            </ul>
          </div>
        </div>
        <div className="input-div ">
          <div className="i ">
            <i className="fas fa-user "></i>
          </div>
          <div className="">
            <input
              type="text"
              name="lastName"
              id="user-lastname"
              className="input"
              required
              placeholder="Last name"
              minlength="3"
              data-message="lastname-message"
            />
          </div>
          <div class="message-div" id="lastname-message">
            <b>Must:</b>
            <ul>
              <li className="invalid" id="lastname-valid">
                Minimum 3 characters and only letters
              </li>
            </ul>
          </div>
        </div>
        <div className="input-div ">
          <div className="i valid">
            <i className="fas fa-at" id="email-icon"></i>
          </div>
          <div className="">
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="Email"
              id="user-email"
              data-message="email-message"
            />
          </div>
          <div className="message-div" id="email-message">
            <b>Must:</b>
            <ul>
              <li className="invalid" id="email-valid">
                Valid email required
              </li>
            </ul>
          </div>
        </div>

        <div class="input-div ">
          <div class="i">
            <i class="fas fa-lock" id="password-icon"></i>
          </div>
          <div class="">
            <input
              type="password"
              id="user-password"
              class="input"
              name="password"
              required
              placeholder="Password"
              data-message="password-message"
              minlength="6"
            />
          </div>
          <div className="message-div" id="password-message">
            <b>Password must:</b>
            <ul>
              <li className="invalid" id="lower-case-valid">
                Lower case letter
              </li>
              <li className="invalid" id="upper-case">
                Upper case letter
              </li>
              <li className="invalid" id="number">
                One number
              </li>
            </ul>
          </div>
        </div>
        <div className="input-div ">
          <div className="i">
            <i className="fas fa-lock" id="password-confirm-icon"></i>
          </div>
          <div className="">
            <input
              type="password"
              className="input"
              id="user-password-confirm"
              name="password2"
              required
              placeholder="Confirm password"
              data-message="confirm-message"
              minlength="6"
            />
          </div>
          <div className="message-div" id="confirm-message">
            <b>Must be:</b>
            <ul>
              <li className="invalid" id="confirm-password-list">
                Similar to password
              </li>
            </ul>
          </div>
        </div>
        <button type="submit" className="btn" id="form-submit">
          Sign Up
        </button>
        <div className="links">
          <a href="/login">Login Here</a>
        </div>

        <div className="social-login">
          <div className="or-div">
            <h3></h3>
            <h3>OR</h3>
            <h3></h3>
          </div>
          <div className="social">
            <a href="#facebook" className="facebook-login">
              <i className="fab fa-facebook"></i>&nbsp;Facebook
            </a>
            <a href="#facebook">
              <i className="fab fa-google"></i>&nbsp;Google
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

class Signup extends Component {
  state = {};
  render() {
    return (
      <>
        <SignupHeader></SignupHeader>
        <div className="container">
          <TextBox></TextBox>
          <SignupForm></SignupForm>
        </div>
      </>
    );
  }
}

export default Signup;
