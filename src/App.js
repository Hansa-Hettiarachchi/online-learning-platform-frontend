// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './components/Auth/Login';
// // import Register from './components/Auth/Register';
// // import Home from './components/Home/Home';
// // import Dashboard from './Pages/Dashboard';
// // import Profile from './Pages/Profile';
// // import CourseList from './Pages/CourseList';
// // import EnrollmentStatus from './Pages/EnrollmentStatus';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home/>} /> 
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/dashboard" element={<Dashboard />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/courses" element={<CourseList />} />
// //         <Route path="/enrollments" element={<EnrollmentStatus />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// // src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Home from './components/Home/Home';
// import StudentDashboard from './Pages/StudentDashboard';
// import InstructorDashboard from './Pages/InstructorDashboard';
// import Profile from './Pages/Profile';
// import CourseList from './Pages/CourseList';
// import EnrollmentStatus from './Pages/EnrollmentStatus';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} /> 
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/student-dashboard" element={<StudentDashboard />} />
//         <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/courses" element={<CourseList />} />
//         <Route path="/enrollments" element={<EnrollmentStatus />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import StudentDashboard from './Pages/StudentDashboard'; // Ensure this is implemented
import InstructorDashboard from './Pages/InstructorDashboard'; // Ensure this is implemented
import CourseList from './Pages/CourseList';
import EnrollmentStatus from './Pages/EnrollmentStatus';
import CreateCourse from './Pages/CreateCourse'; // Import CreateCourse component
import MyCourses from './Pages/MyCourses'; // Import MyCourses component
import UpdateCourse from './Pages/UpdateCourse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/create-course" element={<CreateCourse />} />
        <Route path="/instructor/my-courses" element={<MyCourses />} />
        <Route path="/instructor/course/:courseId" element={<UpdateCourse />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/enrollments" element={<EnrollmentStatus />} />
      </Routes>
    </Router>
  );
};

export default App;

