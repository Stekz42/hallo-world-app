import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 75, y: e.clientY - 25 }); // 75 und 25 sind die Hälfte der Button-Größe
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hallo World!</h1>
      <button
        className="blend-button"
        style={{ left: position.x, top: position.y, position: 'absolute' }}
      >
        <img src="/moon.svg" alt="Moon Icon" className="button-icon" />
        Focus
      </button>
    </div>
  );
}

export default App;
