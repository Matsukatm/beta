import React, { useState } from 'react';
import './SignUpPage.css'; // You can keep this but adjust the styles inside

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     const payload = {
    username: formData.username, // 'name' must match the backend
    phone_number: formData.phone,
    email: formData.email,
    password: formData.password
  };
    try {
      const response = await fetch('http://localhost:5000/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Sign up successful!');
        setFormData({ username:'', phone: '', email: '', password: '' }); // reset form
      } else {
        alert(data.error || 'Sign up failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="logo">
          <img src="/images/beta1.jpeg" alt="Beta Seedlings Logo" />
        </div>
        <h2>Create an Account</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            pattern="[0-9]{10,15}"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <button type="submit" className="submit-btn">Sign up</button>
        </form>

        <p className="login-redirect">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
