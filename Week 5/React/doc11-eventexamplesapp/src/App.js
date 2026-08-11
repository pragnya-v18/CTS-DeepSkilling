import React from 'react';
import Counter from './Components/Counter';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Event Examples App</h1>
      <Counter />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
