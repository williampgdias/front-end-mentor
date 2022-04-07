import React from 'react';
import './App.css';
import CardIntro from './Components/Intro';
import CardComment from './Components/Comments';

function App() {
  return (
    <div className='body'>
      <CardIntro />
      <CardComment />
    </div>
  );
}

export default App;
