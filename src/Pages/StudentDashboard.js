import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Pages.css'; 
const StudentDashboard = () => {
  const [username, setUsername] = useState(''); 
  const [message, setMessage] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [prompt, setPrompt] = useState('');
  const [showPromptInput, setShowPromptInput] = useState(false);
  const navigate = useNavigate();

  // Fetch user information on component load
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.username);
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

  // Toggle the prompt input box
  const handleShowPromptInput = () => {
    setShowPromptInput(!showPromptInput);
  };

  // Submit the prompt and get recommendations
  const handleSubmitPrompt = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/recommendations/recommendations', { prompt }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setRecommendations('Failed to fetch recommendations.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Student Dashboard</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      {/* {username && <h2>Welcome, {username}!</h2>} */}
      <h2 className="welcome-message">Welcome, {username}!</h2>
      {message && <div className="error-message">{message}</div>}

      <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={handleViewAvailableCourses}>View Available Courses</button>
        <button className="dashboard-button" onClick={handleViewEnrolledCourses}>View Enrolled Courses</button>
        <button className="dashboard-button" onClick={handleShowPromptInput}>Get Course Recommendations</button>
      </div>

      {showPromptInput && (
        <div className="recommendations-container">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
          />
          <button onClick={handleSubmitPrompt}>Submit</button>
          {recommendations && (
            <div className="recommendations-output">
              <h3>Recommendations:</h3>
              <p>{recommendations}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;

