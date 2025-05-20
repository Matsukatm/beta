import React from "react";
import '../styles.css';

const Header = () => {
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
          </div>
      </div>
    </header>
  );
};

export default Header;
