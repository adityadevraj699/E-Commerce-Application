/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSignInAlt, FaHome, FaTags, FaStar, FaSearch } from 'react-icons/fa';
import '../styles/navbar.css'; 

function Navbar({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (onSearch) {
      onSearch(event.target.value); // Optional: pass search term to parent component
    }
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate('/products'); // Redirect to products page after search submission
    }
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Collapse menu after clicking a link
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand text-danger" href="/"><h1>Fashion Hub</h1></a>
      <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/" 
              onClick={handleNavLinkClick} 
              activeClassName="active-link"
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/offers" 
              onClick={handleNavLinkClick} 
              activeClassName="active-link"
            >
              <FaTags /> Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/trending" 
              onClick={handleNavLinkClick} 
              activeClassName="active-link"
            >
              <FaStar /> Trending
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/cart" 
              onClick={handleNavLinkClick} 
              activeClassName="active-link"
            >
              <FaShoppingCart /> Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/login" 
              onClick={handleNavLinkClick} 
              activeClassName="active-link"
            >
              <FaSignInAlt /> Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/profile" 
              onClick={handleNavLinkClick} 
              activeClassName="active-link"
            >
              <FaUser /> Profile
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 search-form" onSubmit={handleSubmitSearch}>
          <input
            className="form-control mr-sm-2 search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-light my-2 my-sm-0 search-button" type="submit"><FaSearch /></button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
