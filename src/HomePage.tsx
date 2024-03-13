import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <h1> BUS MANAGMENT SYSTEM</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Driver Login</Link>
        <Link to="/tracking">Track My Bus</Link>
      </nav>
      <div className="hero-section">
        <div>
          <h1>WELCOME TO BUS MANAGMENT SYSTEM</h1>
          <p>Efficiently manage bus services for students and staff.</p>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
