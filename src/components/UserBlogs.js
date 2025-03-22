import React from 'react';

const UserBlogs = ({ posts, onEdit, onDelete }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <button onClick={() => onEdit(post.id)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserBlogs;