import React from 'react';

const BlogPost = ({ post, onEdit, onDelete, showButtons }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <p>{post.content}</p>
      {showButtons && (
        <div className="button-group">
          <button className="edit" onClick={() => onEdit(post.id)}>Edit</button>
          <button className="delete" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
