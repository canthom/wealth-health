import React from 'react';
import StyledHeader from './Header.styled';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <span>Health Wealth.</span>
      </Link>

      <nav>
        <NavLink to="/" activeclassname="active">
          HRnet
        </NavLink>
        <NavLink to="/employee-list" activeclassname="active">
          Employee List
        </NavLink>
      </nav>
    </StyledHeader>
  );
}

export default Header;
