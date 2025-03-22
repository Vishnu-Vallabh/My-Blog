import React from 'react';
import BlogList from '../components/BlogList';

const UserBlogsPage = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h1>My Blogs</h1>
      <BlogList posts={posts} onEdit={onEdit} onDelete={onDelete} showButtons={true} />
    </div>
  );
};

export default UserBlogsPage;