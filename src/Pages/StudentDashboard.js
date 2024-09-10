// import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Pages.css'; 

// const StudentDashboard = () => {
//   const [username, setUsername] = useState(''); // Define state variables
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   // Fetch user information on component load
//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/auth/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsername(response.data.username); // Set the username from the response
//       } catch (error) {
//         console.error('Error fetching user information:', error);
//         setMessage('Failed to fetch user information.');
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   // Navigate to the course list page
//   const handleViewAvailableCourses = () => {
//     navigate('/courses');
//   };

//   // Navigate to the enrolled courses page
//   const handleViewEnrolledCourses = () => {
//     navigate('/enrolled-courses');
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       {username && <h2>Welcome, {username}!</h2>}
//       {message && <div className="error-message">{message}</div>}

//       <div className="dashboard-buttons">
//         <button onClick={handleViewAvailableCourses}>View Available Courses</button>
//         <button onClick={handleViewEnrolledCourses}>View Enrolled Courses</button>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Pages.css'; // Ensure this path is correct

const StudentDashboard = () => {
  const [username, setUsername] = useState(''); // Define state variables
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Fetch user information on component load
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.username); // Set the username from the response
      } catch (error) {
        console.error('Error fetching user information:', error);
        setMessage('Failed to fetch user information.');
      }
    };

    fetchUserInfo();
  }, []);

  // Navigate to the course list page
  const handleViewAvailableCourses = () => {
    navigate('/courses');
  };

  // Navigate to the enrolled courses page
  const handleViewEnrolledCourses = () => {
    navigate('/enrollments');
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Student Dashboard</h1>
      {username && <h2>Welcome, {username}!</h2>}
      {message && <div className="error-message">{message}</div>}

      <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={handleViewAvailableCourses}>View Available Courses</button>
        <button className="dashboard-button" onClick={handleViewEnrolledCourses}>View Enrolled Courses</button>
      </div>
    </div>
  );
};

export default StudentDashboard;
