import React from 'react';

const offices = [
  { id: 1, name: 'Downtown Hub', rent: 55000, address: '12 Main St, Chennai' },
  { id: 2, name: 'Tech Park Space', rent: 75000, address: '45 IT Corridor, Bangalore' },
  { id: 3, name: 'City Centre', rent: 45000, address: '8 Park Ave, Mumbai' },
  { id: 4, name: 'Business Bay', rent: 90000, address: '100 Bay Road, Hyderabad' },
];

const officeImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      {/* JSX heading element */}
      <h1>Office Space Rental</h1>

      {/* JSX attribute: image */}
      <img src={officeImage} alt="Office Space" style={{ width: 400, borderRadius: 8 }} />

      {/* JSX object display */}
      <h2>Available Offices</h2>

      {/* JSX list via map */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {offices.map(office => (
          <li key={office.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <h3>{office.name}</h3>
            <p><strong>Address:</strong> {office.address}</p>
            {/* Inline CSS: rent colour red below 60000, green above */}
            <p>
              <strong>Rent: </strong>
              <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
                ₹{office.rent.toLocaleString()}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
