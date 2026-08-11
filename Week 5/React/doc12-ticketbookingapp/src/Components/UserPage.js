import React from 'react';

const flights = [
  { id: 'AI101', from: 'Chennai', to: 'Mumbai', date: '2025-08-10', seats: 5 },
  { id: 'SG202', from: 'Bangalore', to: 'Delhi', date: '2025-08-12', seats: 3 },
  { id: '6E303', from: 'Hyderabad', to: 'Kolkata', date: '2025-08-15', seats: 8 },
];

function UserPage({ onLogout }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Available Flights</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={th}>Flight</th>
            <th style={th}>From</th>
            <th style={th}>To</th>
            <th style={th}>Date</th>
            <th style={th}>Seats</th>
            <th style={th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td style={td}>{f.id}</td>
              <td style={td}>{f.from}</td>
              <td style={td}>{f.to}</td>
              <td style={td}>{f.date}</td>
              <td style={td}>{f.seats}</td>
              <td style={td}><button>Book</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

const th = { border: '1px solid #ccc', padding: 8, textAlign: 'left' };
const td = { border: '1px solid #ccc', padding: 8 };

export default UserPage;
