import React from 'react';

const T20Players = ['Rohit', 'Virat', 'Gill', 'Pant', 'Hardik'];
const RanjiTrophyPlayers = ['Ashwin', 'Jadeja', 'Bumrah', 'Siraj', 'Kuldeep'];

function IndianPlayers() {
  // ES6 destructuring
  const [odd1, , odd3, , odd5] = T20Players;
  const [, even2, , even4] = T20Players;

  // ES6 spread merge
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructuring)</h2>
      <ul>{[odd1, odd3, odd5].map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team Players (Destructuring)</h2>
      <ul>{[even2, even4].map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>All Players — T20 + Ranji (Spread Merge)</h2>
      <ul>{allPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
}

export default IndianPlayers;
