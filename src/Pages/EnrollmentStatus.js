import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css'; 

const EnrollmentStatus = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          setLoading(false);
          return;
        }

        const response = await axios.get('/api/courses/enrolled', {
          headers: { Authorization: `Bearer ${token}` }
        });

        console.log('Enrolled Courses Response:', response.data);

        if (Array.isArray(response.data)) {
          setEnrolledCourses(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="enrollment-status-container">
      <h1 className="page-title">Your Enrolled Courses</h1>
      <ul className="course-list">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map(course => (
            <li key={course._id} className="course-item">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
            </li>
          ))
        ) : (
          <p className="no-courses-message">You are not enrolled in any courses yet.</p>
        )}
      </ul>
    </div>
  );
};

export default EnrollmentStatus;

