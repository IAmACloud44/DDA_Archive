import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  
  const goatsearch = (event) => {
    event.preventDefault();
    const inputEl = event.target.elements.search;
    const input = inputEl.value.toLowerCase();

    if (input === "goat" || input === "goats") {
      navigate("/goat");
    } else if (input === "") {
      inputEl.setCustomValidity("Input something");
      inputEl.reportValidity();
    } else {
      inputEl.setCustomValidity("Not logged in.");
      inputEl.reportValidity();
    }
  };

  return (
    <div>
      <div className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/contents" className={({ isActive }) => (isActive ? 'active' : '')}>Contents</NavLink>
        <NavLink to="/forums" className={({ isActive }) => (isActive ? 'active' : '')}>Forum</NavLink>
        <div className="searchbar">
          <form onSubmit={goatsearch}>
            <button type="submit"><i className="fa fa-search"></i></button>
            <input 
            className="input" 
            type="text" 
            name="search" 
            placeholder="Search..." 
            onChange={e => e.target.setCustomValidity("")}/>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Navbar;