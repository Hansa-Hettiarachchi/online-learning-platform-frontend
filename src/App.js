import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import StudentDashboard from './Pages/StudentDashboard'; 
import InstructorDashboard from './Pages/InstructorDashboard'; 
import CourseList from './Pages/CourseList';
import EnrollmentStatus from './Pages/EnrollmentStatus';
import CreateCourse from './Pages/CreateCourse';
import MyCourses from './Pages/MyCourses'; 
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
        <Route path="/update-course/:courseId" element={<UpdateCourse />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/enrollments" element={<EnrollmentStatus />} />
      </Routes>
    </Router>
  );
};

export default App;

