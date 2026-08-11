import React from 'react';

// Conditional rendering via if/else
function BookDetails({ isAvailable, title, author }) {
  let statusMsg;
  if (isAvailable) {
    statusMsg = <span style={{ color: 'green' }}>Available</span>;
  } else {
    statusMsg = <span style={{ color: 'red' }}>Out of Stock</span>;
  }

  return (
    <div style={card}>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Status: {statusMsg}</p>
    </div>
  );
}

const card = { border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 };

export default BookDetails;
