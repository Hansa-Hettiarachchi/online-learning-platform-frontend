import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css'; // Import styles for Dashboard
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);

        if (userResponse.data.role === 'instructor') {
          // Fetch instructor's courses
          const coursesResponse = await axios.get('/api/courses/my-courses', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setCourses(coursesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <h1>Welcome, {user?.username}</h1>
        <div className="dashboard-content">
          <button className="dashboard-button">
            <Link to="/instructor/create-course">Create New Course</Link>
          </button>
          <button className="dashboard-button">
            <Link to="/instructor/my-courses">View Created Courses</Link>
          </button>
          <button className="dashboard-button">
            <Link to="/instructor/update-course">Update a Course</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;

