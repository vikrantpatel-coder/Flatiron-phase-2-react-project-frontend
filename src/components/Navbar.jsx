import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './Styles/Navbar.styles';
import NavContainer from './Styles/NavContainer.styles';



function Navbar() {
  return (
    
    <NavContainer>
      
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AddSuperhero">Request Superhero</NavLink>
          <NavLink to="/about">About</NavLink>
          
    </NavContainer>
  );
}

export default Navbar;