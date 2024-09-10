import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Pages.css'; // Import styles for MyCourses

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/courses/my-courses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="my-courses-container">
      <h1>My Created Courses</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course._id} className="course-item">
            <h2>{course.title}</h2>
            <button>
              <Link to={`/instructor/course/${course._id}`}>View Details</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;
