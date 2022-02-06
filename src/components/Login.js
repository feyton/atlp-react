import React from "react";
import "../css/util.scss";
import "../css/main.scss";
import "../css/login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="modal" id="login-modal">
      <div className="modal-content">
        <div className="modal-card">
          <div className="modal-close" onClick={handleClick}>
            x
          </div>
          <div class="modal-title login-modal-form-div">
            <h1>LOGIN</h1>
            <form action="#none" className="login-form" id="login-form">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                id="user-email"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                required
              />

              <button type="submit" class="btn btn-primary ">
                Login
              </button>
              <p>
                <a href="#none" class="password-reset">
                  Reset password
                </a>
              </p>
              <hr />
              <h3>OR</h3>
              <div class="button-group">
                <div class="google">
                  <i className="fab fa-google"></i>&nbsp; <span>Google</span>
                </div>
                <div class="facebook">
                  <i className="fab fa-facebook"></i>&nbsp;<span>Facebook</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
