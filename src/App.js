import './App.css';

import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostList posts={posts} onDelete={deletePost} />
      <PostForm onAdd={addPost} />
    </div>
  );
}

export default App;
