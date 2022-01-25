import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/start');
  }
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Click on the button to start</h3>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default LandingPage;