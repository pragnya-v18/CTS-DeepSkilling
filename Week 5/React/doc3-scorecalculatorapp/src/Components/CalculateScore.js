import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, goal }) {
  const average = (Total / goal) * 100;
  return (
    <div className="scoreCard">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
