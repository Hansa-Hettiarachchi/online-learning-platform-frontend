// // // // src/pages/Dashboard.js

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom'; // Import Link for navigation
// // // import './Pages.css'; // Import styles for Dashboard

// // // const Dashboard = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// // //   const [availableCourses, setAvailableCourses] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [enrollmentSuccess, setEnrollmentSuccess] = useState('');

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.get('/api/auth/me', {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         setUser(response.data);

// // //         if (response.data.role === 'student') {
// // //           // Fetch enrolled courses
// // //           const enrolledResponse = await axios.get('/api/courses/enrolled', {
// // //             headers: { Authorization: `Bearer ${token}` }
// // //           });
// // //           setEnrolledCourses(enrolledResponse.data);

// // //           // Fetch available courses
// // //           const availableResponse = await axios.get('/api/courses', {
// // //             headers: { Authorization: `Bearer ${token}` }
// // //           });
// // //           setAvailableCourses(availableResponse.data);
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching user data:', error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchUserData();
// // //   }, []);

// // //   const handleEnroll = async (courseId) => {
// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       await axios.post('/api/courses/enroll', { courseId }, {
// // //         headers: { Authorization: `Bearer ${token}` }
// // //       });
// // //       setEnrollmentSuccess('Successfully enrolled in the course!');
// // //       // Refresh enrolled courses list
// // //       const response = await axios.get('/api/courses/enrolled', {
// // //         headers: { Authorization: `Bearer ${token}` }
// // //       });
// // //       setEnrolledCourses(response.data);
// // //     } catch (error) {
// // //       console.error('Error enrolling in course:', error);
// // //       setEnrollmentSuccess('Failed to enroll in the course.');
// // //     }
// // //   };

// // //   if (loading) return <div className="loading">Loading...</div>;

// // //   return (
// // //     <div className="dashboard-container">
// // //       <div className="dashboard-hero">
// // //         <h1>Welcome, {user?.username}</h1>
// // //         <div className="dashboard-buttons">
// // //           <Link to="/courses" className="dashboard-button">View Available Courses</Link>
// // //           <Link to="/enrollments" className="dashboard-button">View Your Enrolled Courses</Link>
// // //         </div>
// // //         {user?.role === 'student' && (
// // //           <>
// // //             <div className="dashboard-content">
// // //               <h2>Your Enrolled Courses</h2>
// // //               {enrollmentSuccess && <div className="enrollment-message">{enrollmentSuccess}</div>}
// // //               <ul>
// // //                 {enrolledCourses.map(course => (
// // //                   <li key={course._id}>{course.title}</li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //             <div className="dashboard-content">
// // //               <h2>Available Courses</h2>
// // //               <ul>
// // //                 {availableCourses.map(course => (
// // //                   <li key={course._id}>
// // //                     {course.title}
// // //                     <button
// // //                       className="enroll-button"
// // //                       onClick={() => handleEnroll(course._id)}
// // //                     >
// // //                       Enroll
// // //                     </button>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Redirect } from 'react-router-dom'; // Import Redirect for unauthorized access
// // import './Pages.css'; // Import styles for Dashboard

// // const Dashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [enrolledCourses, setEnrolledCourses] = useState([]);
// //   const [availableCourses, setAvailableCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [enrollmentSuccess, setEnrollmentSuccess] = useState('');
// //   const [view, setView] = useState('available'); // State to manage view

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.get('/api/auth/me', {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         setUser(response.data);

// //         if (response.data.role === 'student') {
// //           // Fetch enrolled courses
// //           const enrolledResponse = await axios.get('/api/courses/enrolled', {
// //             headers: { Authorization: `Bearer ${token}` }
// //           });
// //           setEnrolledCourses(enrolledResponse.data);

// //           // Fetch available courses
// //           const availableResponse = await axios.get('/api/courses', {
// //             headers: { Authorization: `Bearer ${token}` }
// //           });
// //           setAvailableCourses(availableResponse.data);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching user data:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   const handleEnroll = async (courseId) => {
// //     try {
// //       const token = localStorage.getItem('token');
// //       await axios.post('/api/courses/enroll', { courseId }, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       setEnrollmentSuccess('Successfully enrolled in the course!');
// //       // Refresh enrolled courses list
// //       const enrolledResponse = await axios.get('/api/courses/enrolled', {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       setEnrolledCourses(enrolledResponse.data);
// //     } catch (error) {
// //       console.error('Error enrolling in course:', error);
// //       setEnrollmentSuccess('Failed to enroll in the course.');
// //     }
// //   };

// //   if (loading) return <div className="loading">Loading...</div>;

// //   if (user?.role !== 'student') {
// //     // Redirect to a different page if not a student
// //     return <Redirect to="/unauthorized" />;
// //   }

// //   return (
// //     <div className="dashboard-container">
// //       <div className="dashboard-hero">
// //         <h1>Welcome, {user?.username}</h1>
// //         <div className="dashboard-buttons">
// //           <button onClick={() => setView('available')} className="dashboard-button">
// //             View Available Courses
// //           </button>
// //           <button onClick={() => setView('enrolled')} className="dashboard-button">
// //             View Your Enrolled Courses
// //           </button>
// //         </div>
// //         {user?.role === 'student' && (
// //           <>
// //             {view === 'available' && (
// //               <div className="dashboard-content">
// //                 <h2>Available Courses</h2>
// //                 {enrollmentSuccess && <div className="enrollment-message">{enrollmentSuccess}</div>}
// //                 <ul>
// //                   {availableCourses.map(course => (
// //                     <li key={course._id}>
// //                       {course.title}
// //                       <button
// //                         className="enroll-button"
// //                         onClick={() => handleEnroll(course._id)}
// //                       >
// //                         Enroll
// //                       </button>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //             {view === 'enrolled' && (
// //               <div className="dashboard-content">
// //                 <h2>Your Enrolled Courses</h2>
// //                 {enrollmentSuccess && <div className="enrollment-message">{enrollmentSuccess}</div>}
// //                 <ul>
// //                   {enrolledCourses.map(course => (
// //                     <li key={course._id}>{course.title}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;




// // src/pages/Dashboard.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Pages.css'; // Import styles for Dashboard

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [availableCourses, setAvailableCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [enrollmentSuccess, setEnrollmentSuccess] = useState('');
//   const [view, setView] = useState('available');
//   const history = useHistory();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/auth/me', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setUser(response.data);

//         if (response.data.role !== 'student') {
//           history.push('/instructor-dashboard'); // Redirect if not a student
//           return;
//         }

//         const enrolledResponse = await axios.get('/api/courses/enrolled', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setEnrolledCourses(enrolledResponse.data);

//         const availableResponse = await axios.get('/api/courses', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setAvailableCourses(availableResponse.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [history]);

//   const handleEnroll = async (courseId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('/api/courses/enroll', { courseId }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setEnrollmentSuccess('Successfully enrolled in the course!');
//       const response = await axios.get('/api/courses/enrolled', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setEnrolledCourses(response.data);
//     } catch (error) {
//       console.error('Error enrolling in course:', error);
//       setEnrollmentSuccess('Failed to enroll in the course.');
//     }
//   };

//   if (loading) return <div className="loading">Loading...</div>;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-hero">
//         <h1>Welcome, {user?.username}</h1>
//         <div className="dashboard-buttons">
//           <button onClick={() => setView('available')} className="dashboard-button">
//             View Available Courses
//           </button>
//           <button onClick={() => setView('enrolled')} className="dashboard-button">
//             View Your Enrolled Courses
//           </button>
//         </div>
//         {view === 'available' && (
//           <div className="dashboard-content">
//             <h2>Available Courses</h2>
//             {enrollmentSuccess && <div className="enrollment-message">{enrollmentSuccess}</div>}
//             <ul>
//               {availableCourses.map(course => (
//                 <li key={course._id}>
//                   {course.title}
//                   <button
//                     className="enroll-button"
//                     onClick={() => handleEnroll(course._id)}
//                   >
//                     Enroll
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {view === 'enrolled' && (
//           <div className="dashboard-content">
//             <h2>Your Enrolled Courses</h2>
//             {enrollmentSuccess && <div className="enrollment-message">{enrollmentSuccess}</div>}
//             <ul>
//               {enrolledCourses.map(course => (
//                 <li key={course._id}>{course.title}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Pages.css'; // Import styles for Dashboard

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Redirect to login if no token
          navigate('/login');
          return;
        }

        const userResponse = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userResponse.data);

        // Redirect based on role
        if (userResponse.data.role === 'student') {
          navigate('/student-dashboard');
        } else if (userResponse.data.role === 'instructor') {
          navigate('/instructor-dashboard');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) return <div className="loading">Loading...</div>;

  // You shouldn't reach here if redirects are correct, but handle unexpected cases
  return <div className="error">Unexpected error occurred. Redirecting...</div>;
};

export default Dashboard;
