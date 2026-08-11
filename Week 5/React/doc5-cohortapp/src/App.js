import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'React Batch A', batch: 'Jan 2025', status: 'ongoing', students: 30 },
  { name: 'Angular Batch B', batch: 'Mar 2025', status: 'completed', students: 25 },
  { name: '.NET Batch C', batch: 'Jun 2025', status: 'ongoing', students: 28 },
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>My Academy — Cohort Dashboard</h1>
      {cohorts.map((c, i) => <CohortDetails key={i} {...c} />)}
    </div>
  );
}

export default App;
