import React from 'react';

// Conditional rendering via element variables
function CourseDetails({ isEnrolled, courseName, instructor, duration }) {
  // element variable
  let enrollBtn;
  if (isEnrolled) {
    enrollBtn = <button disabled style={{ background: '#aaa', color: '#fff' }}>Enrolled</button>;
  } else {
    enrollBtn = <button style={{ background: '#0078d7', color: '#fff' }}>Enroll Now</button>;
  }

  return (
    <div style={card}>
      <h3>{courseName}</h3>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
      {enrollBtn}
    </div>
  );
}

const card = { border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 };

export default CourseDetails;
