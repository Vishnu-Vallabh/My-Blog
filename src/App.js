import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import AppRoutes from './routes';
import Login from './Login';
import './App.css'; // Import the CSS file

const App = () => {
  const [posts, setPosts] = useState(() => {
    // Retrieve posts from local storage or use default posts if none are found
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [
      { id: 1, title: 'First Post', content: 'This is my first post!', image: 'path/to/image1.jpg', excerpt: 'This is my first post!' },
      { id: 2, title: 'Second Post', content: 'This is my second post!', image: 'path/to/image2.jpg', excerpt: 'This is my second post!' },
    ];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Save posts to local storage whenever they change
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleSubmit = (data) => {
    if (data.id) {
      setPosts(posts.map(post => (post.id === data.id ? data : post)));
    } else {
      const newPost = { ...data, id: posts.length + 1 };
      setPosts([...posts, newPost]);
    }
    navigate('/');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Routes>
          <Route path="/*" element={<AppRoutes posts={posts} onEdit={handleEdit} onDelete={handleDelete} onSubmit={handleSubmit} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
