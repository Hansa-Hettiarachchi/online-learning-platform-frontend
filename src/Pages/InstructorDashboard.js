import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Pages.css'; // Import styles for Dashboard

const InstructorDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page after logout
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header-container">
        <h1 className="dashboard-header">Instructor Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard-hero">
        {/* <h1>Welcome, {user?.username}</h1> */}
        <h2 className="welcome-message">Welcome, {user?.username}!</h2>
        <div className="dashboard-buttons">
          <button className="dashboard-button">
            <Link to="/instructor/create-course">Create New Course</Link>
          </button>
          <button className="dashboard-button">
            <Link to="/instructor/my-courses">View Created Courses</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;

