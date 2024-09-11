import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // Send login request
      const loginResponse = await axios.post('https://deployement-backend.vercel.app/api/auth/login', { username, password });
      const token = loginResponse.data.token;

      // Store JWT token
      localStorage.setItem('token', token);

      // Fetch user data to determine role
      const userResponse = await axios.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Redirect based on user role
      if (userResponse.data.role === 'student') {
        navigate('/student-dashboard'); // Redirect to student dashboard
      } else if (userResponse.data.role === 'instructor') {
        navigate('/instructor-dashboard'); // Redirect to instructor dashboard
      } else {
        setError('User role not recognized');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <button onClick={handleGoHome} className="home-button">
          Go to Home
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
