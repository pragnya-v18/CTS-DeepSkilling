import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

const flag = true;

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Cricket App — ES6 Features</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
