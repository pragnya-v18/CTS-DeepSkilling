import React from 'react';

// Conditional rendering via ternary operator + && operator
function BlogDetails({ isPremium, title, excerpt, commentsCount }) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      {/* ternary */}
      <p>{isPremium ? '🔒 Premium Content' : excerpt}</p>
      {/* && operator */}
      {commentsCount > 0 && <p>Comments: {commentsCount}</p>}
    </div>
  );
}

const card = { border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 };

export default BlogDetails;
