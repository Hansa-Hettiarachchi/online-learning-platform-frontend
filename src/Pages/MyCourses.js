import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Pages.css'; // Import styles for MyCourses

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [showDetails, setShowDetails] = useState(false);

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

  const handleViewDetails = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      const studentsResponse = await axios.get(`/api/courses/${courseId}/enrolled-students`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEnrolledStudents(studentsResponse.data);

      const courseResponse = await axios.get(`/api/courses/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourseName(courseResponse.data.title);

      setShowDetails(true);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="my-courses-container">
      <h1>My Created Courses</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course._id} className="course-item">
            <h2>{course.title}</h2>
            <button onClick={() => handleViewDetails(course._id)} className="view-details-button">
              View Details
            </button>
            <Link to={`/update-course/${course._id}`} className="update-course-button">
              Update Course
            </Link>
          </li>
        ))}
      </ul>

      {showDetails && (
        <div className="enrolled-students-container">
          <h2>Enrolled Students for Course: {courseName}</h2>
          {enrolledStudents.length > 0 ? (
            <table className="students-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {enrolledStudents.map(student => (
                  <tr key={student._id}>
                    <td>{student.username}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students enrolled in this course.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
