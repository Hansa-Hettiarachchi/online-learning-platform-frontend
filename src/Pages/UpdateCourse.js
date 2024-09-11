import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Pages.css'; 

const UpdateCourse = () => {
  const { courseId } = useParams(); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/courses/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTitle(response.data.title);
        setDescription(response.data.description);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/api/courses/${courseId}`, { title, description, content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Course updated successfully!');
      navigate('/instructor/my-courses'); 
    } catch (error) {
      console.error('Error updating course:', error);
      setMessage('Failed to update course.');
    }
  };

  if (loading) return <div className="loading">Loading...</div>; 

  return (
    <div className="update-course-container">
      <h1>Update Course</h1>
      <form onSubmit={handleUpdateCourse}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update Course</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateCourse;
