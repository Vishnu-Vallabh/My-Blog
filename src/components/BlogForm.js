import React, { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || '');

  useEffect(() => {
    setTitle(initialData.title || '');
    setContent(initialData.content || '');
    setImageUrl(initialData.imageUrl || '');
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, imageUrl });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BlogForm;