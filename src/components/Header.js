import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {setMenuOpen(!menuOpen);};
  const closeMenu = () => {setMenuOpen(false);};

  return (
    <header>
      <div className="header-content">
        <div className="left-section">
          <div className="badge">HOT Deals</div>
          <h1>Beta Nurseries</h1>
          <p className="subheading">Quality is our trademark</p>
        </div>
        <div className="right-section">
          <img src="images/beta1.jpeg" alt="Profile" className="profile-pic" />
          <button className="hamburger-button" onClick={toggleMenu} aria-label="Toggle Menu">&#9776;</button>
          {menuOpen &&(
            <div className="dropdown-menu">
              <Link to="/profile" onClick={closeMenu}>Profile</Link>
              <Link to="/settings" onClick={closeMenu}>Settings</Link>
              <Link to="/logout" onClick={closeMenu}>Logout</Link>
          </div>
          )}
        </div>
      </div>

      <div className="sign-up">
        <h2>Sign up to get updates on our offers and hot deals</h2>        
        <Link to="/login" className="login-link">
          <button className="login-button">Signup/Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
