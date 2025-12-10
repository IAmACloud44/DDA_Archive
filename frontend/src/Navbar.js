import React from 'react';
import { NavLink } from 'react-router-dom';

  const filler = (event) => {
    event.preventDefault();
    event.target.elements[0].setCustomValidity("Not logged in.")
  }

function Navbar() {
  return (
    <div>
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
      <NavLink to="/contents" className={({ isActive }) => (isActive ? 'active' : '')}>Contents</NavLink>
      <NavLink to="/forums" className={({ isActive }) => (isActive ? 'active' : '')}>Forum</NavLink>
      <div className="searchbar"> 
        <form onSubmit={filler}>
          <button type="submit"><i className="fa fa-search"></i></button>
          <input type="text" placeholder="Search..."/>
        </form>   
      </div> 
    </div>
      <br/>               
    </div>
  );
}

export default Navbar;
