import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTypewriter from 'react-typewriter'

export function App() {
  return (
    <ReactTypewriter
      lines={['Hello, world!', 'This is a typing effect.', 'Enjoy!']}
      typingSpeed={80}
      lineDelay={800}
      loop={true}
      style={{ color: 'black', backgroundColor: 'white', padding: '1em' }}
    />
  );
}

export default App;
