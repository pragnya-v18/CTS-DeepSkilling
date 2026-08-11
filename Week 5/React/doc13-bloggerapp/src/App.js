import React from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Blogger App — Conditional Rendering</h1>

      <h2>Books (if/else)</h2>
      <BookDetails title="Clean Code" author="Robert C. Martin" isAvailable={true} />
      <BookDetails title="The Pragmatic Programmer" author="Hunt & Thomas" isAvailable={false} />

      <h2>Blogs (ternary + &&)</h2>
      <BlogDetails title="React Hooks Deep Dive" isPremium={false} excerpt="Hooks let you use state in function components..." commentsCount={12} />
      <BlogDetails title="Advanced TypeScript" isPremium={true} excerpt="" commentsCount={0} />

      <h2>Courses (element variables)</h2>
      <CourseDetails courseName="React Fundamentals" instructor="John Doe" duration="8 weeks" isEnrolled={true} />
      <CourseDetails courseName="Node.js Mastery" instructor="Jane Smith" duration="10 weeks" isEnrolled={false} />
    </div>
  );
}

export default App;
