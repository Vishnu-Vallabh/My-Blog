import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const CreateEditBlogPage = ({ onSubmit, posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    if (id) {
      const blog = posts.find(post => post.id === parseInt(id));
      if (blog) {
        setBlogData(blog);
      }
    }
  }, [id, posts]);

  const handleSubmit = (data) => {
    onSubmit({ ...data, id: blogData.id });
    navigate('/');
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit Blog' : 'Create Blog'}</h1>
      <BlogForm onSubmit={handleSubmit} initialData={blogData} />
    </div>
  );
};

export default CreateEditBlogPage;