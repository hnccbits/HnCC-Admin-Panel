import React from 'react';

function PostCard({ data }) {
  return (
    <div style={{ color: 'white' }}>
      <h4>{data.author}</h4>
      <h4>{data.title}</h4>
      <h4>{data.content}</h4>
    </div>
  );
}

export default PostCard;
