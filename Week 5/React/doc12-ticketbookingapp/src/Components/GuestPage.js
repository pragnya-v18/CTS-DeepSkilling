import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book tickets.</p>
      <button onClick={onLogin} style={{ padding: '10px 24px', fontSize: 16 }}>
        Login
      </button>
    </div>
  );
}

export default GuestPage;
