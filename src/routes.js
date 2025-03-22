import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CreateEditBlogPage from './pages/CreateEditBlogPage'; // Import CreateEditBlogPage
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import UserBlogsPage from './pages/UserBlogsPage';
import Header from './components/Header';
import './App.css'; // Import your CSS file

const AppRoutes = ({ posts, onEdit, onDelete, onSubmit }) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} onEdit={onEdit} onDelete={onDelete} />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/create" element={<CreateEditBlogPage onSubmit={onSubmit} posts={posts} />} /> {/* Add CreateEditBlogPage route */}
        <Route path="/edit/:id" element={<CreateEditBlogPage onSubmit={onSubmit} posts={posts} />} /> {/* Add CreateEditBlogPage route for editing */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myblogs" element={<UserBlogsPage posts={posts} onEdit={onEdit} onDelete={onDelete} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;