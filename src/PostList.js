import React from 'react';

function PostList({ posts, onDelete }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
