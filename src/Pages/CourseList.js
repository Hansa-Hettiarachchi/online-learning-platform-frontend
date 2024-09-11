import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css'; 

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        // Fetch all available courses
        const coursesResponse = await axios.get('/api/courses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(coursesResponse.data);

        // Fetch enrolled courses
        const enrolledResponse = await axios.get('/api/courses/enrolled', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEnrolledCourses(enrolledResponse.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const enrollInCourse = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      // Use backticks for template literals
      await axios.post(`/api/courses/enroll/${courseId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Successfully enrolled in the course!');
      // Refresh the enrolled courses and available courses
      const enrolledResponse = await axios.get('/api/courses/enrolled', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEnrolledCourses(enrolledResponse.data);
      const coursesResponse = await axios.get('/api/courses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(coursesResponse.data);
    } catch (error) {
      console.error('Error enrolling in course:', error);
      setMessage('Failed to enroll in the course.');
    }
  };

  // Filter out enrolled courses from the available courses
  const filteredCourses = courses.filter(course =>
    !enrolledCourses.some(enrolled => enrolled._id === course._id)
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="course-list-container">
      <h1>Available Courses</h1>
      {message && <div className="success-message">{message}</div>}
      <ul className="course-list">
        {filteredCourses.map(course => (
          <li key={course._id} className="course-item">
            <h2>{course.title}</h2>
            <button onClick={() => enrollInCourse(course._id)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
