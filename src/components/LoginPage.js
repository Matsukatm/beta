import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        
        <div className="sign-up">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
