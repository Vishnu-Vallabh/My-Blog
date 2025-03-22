import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, onEdit, onDelete, showButtons }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
          showButtons={showButtons}
        />
      ))}
    </div>
  );
};

export default BlogList;
