import React from 'react';
import BlogList from '../components/BlogList';

const HomePage = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h1>Home</h1>
      <BlogList posts={posts} onEdit={onEdit} onDelete={onDelete} showButtons={false} />
    </div>
  );
};

export default HomePage;