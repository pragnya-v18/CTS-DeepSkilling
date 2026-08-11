import React from 'react';

const players = [
  { name: 'Rohit', score: 85 }, { name: 'Virat', score: 92 },
  { name: 'Gill', score: 60 }, { name: 'Pant', score: 45 },
  { name: 'Hardik', score: 78 }, { name: 'Jadeja', score: 55 },
  { name: 'Ashwin', score: 30 }, { name: 'Bumrah', score: 10 },
  { name: 'Siraj', score: 15 }, { name: 'Shami', score: 20 },
  { name: 'Kuldeep', score: 65 },
];

function ListofPlayers() {
  // ES6 map
  const allPlayers = players.map((p, i) => (
    <li key={i}>{p.name} — {p.score}</li>
  ));

  // ES6 arrow function filter
  const lowScorers = players.filter(p => p.score < 70).map((p, i) => (
    <li key={i} style={{ color: 'red' }}>{p.name} — {p.score}</li>
  ));

  return (
    <div>
      <h2>All Players (ES6 map)</h2>
      <ul>{allPlayers}</ul>
      <h2>Players with score below 70 (arrow function filter)</h2>
      <ul>{lowScorers}</ul>
    </div>
  );
}

export default ListofPlayers;
