import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, batch, status, students }) {
  const headingStyle = { color: status === 'ongoing' ? 'green' : 'blue' };
  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Batch</dt><dd>{batch}</dd>
        <dt>Status</dt><dd>{status}</dd>
        <dt>Students</dt><dd>{students}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
