import React, { useState } from 'react';
import axios from 'axios';
import './Pages.css'; // Import styles for CreateCourse

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/courses/create', { title, description, content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Course created successfully!');
      setTitle('');
      setDescription('');
      setContent('');
    } catch (error) {
      console.error('Error creating course:', error);
      setMessage('Failed to create course.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-course-container">
      <h1>Create New Course</h1>
      <form onSubmit={handleSubmit} className="create-course-form">
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
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Creating...' : 'Create Course'}
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default CreateCourse;
