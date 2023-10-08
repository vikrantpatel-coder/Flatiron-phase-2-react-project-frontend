import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
          <Link to="/">Home</Link>
          <Link to="/AddSuperhero">Request Superhero</Link>
          <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;