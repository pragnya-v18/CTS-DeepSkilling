import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="Abhiram" School="ABC High School" Total={450} goal={500} />
    </div>
  );
}

export default App;
