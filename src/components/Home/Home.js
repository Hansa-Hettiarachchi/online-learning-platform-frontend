import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to the Learning Platform</h1>
        <p>Your gateway to a world of knowledge and courses.</p>
        <div className="cta">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
